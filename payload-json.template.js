/**
 * Payload JSON Template (Form → Dataset)
 *
 * Purpose:
 * - Serialize complex UI state (Pai x Filho, grids, pacotes)
 * - Provide a single, explicit payload to backend datasets
 *
 * Rules:
 * - UI builds the payload
 * - Backend reads only one field
 * - JSON is treated as transport, not state
 *
 * When to use:
 * - Multiple rows
 * - Grouped data
 * - Non-trivial structures
 *
 * When NOT to use:
 * - Simple fields
 * - Scalar values
 */

function buildPayload() {
  var payload = {
    items: []
  };

  $("#table_pacotes tbody tr").each(function () {
    payload.items.push({
      pacote_id: $(this).data("pacoteId"),
      produto: $(this).find(".col-produto").text(),
      quantidade: Number($(this).find(".col-qtde").text())
    });
  });

  $("#payload_json").val(JSON.stringify(payload));
}
