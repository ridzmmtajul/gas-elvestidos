const SETTINGS = {
    APP_NAME: "El Vestidos Profiling System",
    DBID: "1gPkixDSbCfByADHAUxbWFQ3WZlzW6BUqtxtqNk45I-w",
}

function include(filename) {
    return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

function doGet(e) {
    const htmlOuput = HtmlService.createTemplateFromFile("index.html").evaluate()
    htmlOuput.setTitle(SETTINGS.APP_NAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag("viewport", "width=device-width,initial-scale=1")
    return htmlOuput
}

function getLastNum(sheet_name){
  var ss = SpreadsheetApp.openById(SETTINGS.DBID);
  var sheet = ss.getSheetByName(sheet_name);
  var Avals = sheet.getRange("A2:A").getValues();
  var Alast = Avals.filter(String).length;

  if (Alast == 0){
    newNum = 1
  }else{
    Alast += 1;
    var lastNum = sheet.getRange("A"+Alast).getValue();
    var newNum = Number(lastNum) + 1;
  }

  return newNum;
}

function createOrder(data){
    const id = getLastNum("orders").toFixed(0);

    const ss = SpreadsheetApp.openById(SETTINGS.DBID);
    const orderTable = ss.getSheetByName("orders");
    orderTable.appendRow([id, ...data]);
}

function getStaffList(){
  const ss = SpreadsheetApp.openById(SETTINGS.DBID);
  const sheet = ss.getSheetByName("staffs");
  var Avals = sheet.getRange("B:B").getValues();
  var Alast = Avals.filter(String).length;

  const staffs = sheet.getRange("B2:D"+Alast).getValues();
  
  return staffs;
}