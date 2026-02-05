/**
 * Dataset Query Template
 *
 * Purpose:
 * - Read-only access
 * - Expose data to forms, processes or integrations
 *
 * Input:
 * - Constraints (simple filters)
 *
 * Rules:
 * - No side effects
 * - No process start
 * - No integration writes
 * - No state mutation
 *
 * Output:
 * - Tabular data only
 * - No JSON payloads as protocol
 */

function createDataset(fields, constraints, sortFields) {
  var ds = datasetBuilder.newDataset();

  // define schema explicitly
  ds.addColumn("id");
  ds.addColumn("name");
  ds.addColumn("status");

  var filters = parseConstraints(constraints);

  // TODO: data source
  // - SQL
  // - external dataset
  // - ECM / GED
  // - API read

  var results = fetchData(filters);

  for (var i = 0; i < results.length; i++) {
    ds.addRow([
      results[i].id,
      results[i].name,
      results[i].status
    ]);
  }

  return ds;
}

/* ---------------- helpers ---------------- */

function parseConstraints(constraints) {
  var filters = {};

  if (!constraints) return filters;

  for (var i = 0; i < constraints.length; i++) {
    var c = constraints[i];
    filters[c.fieldName] = c.initialValue;
  }

  return filters;
}

function fetchData(filters) {
  // placeholder
  // always return array of objects
  return [];
}
