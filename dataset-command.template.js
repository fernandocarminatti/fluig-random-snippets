/**
 * Dataset Command Template
 *
 * Purpose:
 * - Execute actions with side effects (create process, integrate systems)
 *
 * Input:
 * - JSON payload via a single constraint (key: "payload")
 *
 * Rules:
 * - No DOM access
 * - No UI assumptions
 * - No versioning
 * - No throw for business errors
 *
 * Output:
 * - Dataset with columns: success, message, data
 */

function createDataset(fields, constraints, sortFields) {
  var ds = datasetBuilder.newDataset();
  ds.addColumn("success");
  ds.addColumn("message");
  ds.addColumn("data");

  try {
    var payload = parsePayload(constraints);

    if (!payload || !payload.items || payload.items.length === 0) {
      return fail(ds, "Payload inválido: items vazio");
    }

    // side effects aqui
    // - startProcess
    // - integração externa
    // - criação de registros

    return ok(ds, "Command executado", {
      processed: payload.items.length
    });

  } catch (e) {
    return fail(ds, e.message || String(e));
  }
}

/* ---------------- helpers ---------------- */

function parsePayload(constraints) {
  if (!constraints || constraints.length === 0) {
    throw new Error("Constraint payload não informada");
  }
  return JSON.parse(constraints[0].initialValue);
}

function ok(ds, message, data) {
  ds.addRow([
    true,
    message || "ok",
    data ? JSON.stringify(data) : null
  ]);
  return ds;
}

function fail(ds, message) {
  ds.addRow([false, message || "error", null]);
  return ds;
}
