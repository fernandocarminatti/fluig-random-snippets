/**
 * beforeTaskSave Template
 *
 * Purpose:
 * - Validate data according to the current activity
 *
 * Rules:
 * - No side effects
 * - No dataset command calls
 * - No process start
 * - Validate only what is required for the activity
 * - Fail fast
 */

function beforeTaskSave(colleagueId, nextSequenceId, userList) {
  var activity = getValue("WKNumState");

  switch (activity) {

    case 0: // start
    case 4: // example activity
      validateInitial();
      break;

    case 10: // approval
      validateApproval();
      break;

    default:
      // no validation
      break;
  }
}

/* ---------------- validations ---------------- */

function validateInitial() {
  required("field_requester");
  required("field_date");
}

function validateApproval() {
  required("field_approved");
}

/* ---------------- helpers ---------------- */

function required(field) {
  var value = hAPI.getCardValue(field);
  if (!value) {
    throw "Campo obrigatório não informado: " + field;
  }
}
