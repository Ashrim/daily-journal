function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("journal");

  sheet.appendRow([
    data.timestamp,
    data.type,
    data.mood || "",
    data.score || "",
    data.text || "",
    data.tomorrow || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({"status": "ok"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({"status": "ok", "message": "Journal API is running"}))
    .setMimeType(ContentService.MimeType.JSON);
}
