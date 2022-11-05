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

function createOrder(data){
    const ss = SpreadsheetApp.openById(SETTINGS.DBID);
    const orderTable = ss.getSheetByName("orders");
    orderTable.appendRow(data);
}