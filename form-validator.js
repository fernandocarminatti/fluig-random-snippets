/**
 * Form Validators
 *
 * Regras:
 * - Apenas validação
 * - Chamado por eventos
 * - Falha via throw
 */

function validateByActivity() {
  var activity = getValue("WKNumState");

  switch (activity) {

    case 0:
    case 4:
      startValidation();
      break;

    case 10:
      approvalValidation();
      break;
  }
}

/* ---------------- contexts ---------------- */

function startValidation() {
  required("campo_a");
  required("campo_b");
  requireChildRows("tbl_itens", 1);
}

function approvalValidation() {
  requiredIf(
    "campo_motivo",
    value("campo_status") === "REPROVADO"
  );
}

/* ---------------- primitives ---------------- */

function required(field) {
  if (!value(field)) {
    throw "Campo obrigatório não informado: " + field;
  }
}

function requiredIf(field, condition) {
  if (condition && !value(field)) {
    throw "Campo obrigatório não informado: " + field;
  }
}

function requireChildRows(table, min) {
  var rows = hAPI.getChildrenIndexes(table);
  if (!rows || rows.length < min) {
    throw "Informe ao menos " + min + " item(s)";
  }
}

function value(field) {
  return hAPI.getCardValue(field);
}
