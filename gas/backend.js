const SETTINGS = {
  APP_NAME: "El Vestidos Profiling System",
  DBID: "1gPkixDSbCfByADHAUxbWFQ3WZlzW6BUqtxtqNk45I-w"
};

function include(filename) {
  return HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .getContent();
}

function doGet(e) {
  let template = HtmlService.createTemplateFromFile("index");
  template.data = getDB();
  return template
    .evaluate()
    .setTitle("El Vestidos Profiling System")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;');
}

function getLastNum(sheet_name) {
  var ss = SpreadsheetApp.openById(SETTINGS.DBID);
  var sheet = ss.getSheetByName(sheet_name);
  var Avals = sheet.getRange("A2:A").getValues();
  var Alast = Avals.filter(String).length;

  if (Alast == 0) {
    newNum = 1;
  } else {
    Alast += 1;
    var lastNum = sheet.getRange("A" + Alast).getValue();
    var newNum = Number(lastNum) + 1;
  }

  return newNum;
}

function createOrder(data) {
  const ss = SpreadsheetApp.openById(SETTINGS.DBID);
  const orderTable = ss.getSheetByName("orders");

  const orders = getDB();
  
  let isExist = orders.filter(order => {
    return (order.client_name).toLowerCase() == (data[1]).toLowerCase() &&
    order.unit == data[2] &&
    order.contact_num == data[3] &&
    (order.order).toLowerCase() == (data[4]).toLowerCase();
  });

  if(isExist.length > 0){
    return false;
  }else{
    orderTable.appendRow(data);
  
    return data;
  }
}

function getOrderList() {
  const ss = SpreadsheetApp.openById(SETTINGS.DBID);
  const sheet = ss.getSheetByName("orders");
  var Avals = sheet.getRange("A:A").getValues();
  var Alast = Avals.filter(String).length;

  const orders = sheet.getRange("A3:AH" + Alast).getValues();
  return orders;
}

function getStaff() {
  const ss = SpreadsheetApp.openById(SETTINGS.DBID);
  const sheet = ss.getSheetByName("libraries");
  var Avals = sheet.getRange("A:A").getValues();
  var Alast = Avals.filter(String).length;

  const staff = sheet.getRange("A2:A" + Alast).getValues();
  return staff;
}

function getUnits() {
  const ss = SpreadsheetApp.openById(SETTINGS.DBID);
  const sheet = ss.getSheetByName("libraries");
  var Avals = sheet.getRange("B:B").getValues();
  var Alast = Avals.filter(String).length;

  const units = sheet.getRange("B2:B" + Alast).getValues();
  return units;
}

function getTotalOrders() {
  const ss = SpreadsheetApp.openById(SETTINGS.DBID);
  const sheet = ss.getSheetByName("orders");
  var Avals = sheet.getRange("A3:A").getValues();
  var Alast = Avals.filter(String).length;

  return Alast;
}

function getOrders() {
  return getDB();
}

function checkOrderCode(qrcode) {
  const orders = getDB();
  
  let order = orders.find(order => order.OrderNo === qrcode);

  return order;
}

function getDB() {
  let dbOrders = new DBOrders();

  return dbOrders.getOrders();
}

class Order {
  constructor(
    OrderNo,
    client_name,
    unit,
    contact_num,
    order,
    deposit,
    balance,
    measured_by,
    u_front_length,
    u_back_length,
    u_shoulder,
    u_arm_hole,
    u_uag,
    u_lag,
    u_sleeve_length,
    u_neck,
    u_chest,
    u_waist,
    u_hip1,
    u_hip2,
    u_fig,
    u_bust_distance,
    u_apex_h,
    u_shoulder_distance,
    u_shoulder_blade_height,
    l_waist,
    l_hip,
    l_length,
    l_inner_seam,
    l_crotch,
    l_leg_dir,
    l_knee_cir,
    l_knee_height,
    l_buttom_cir,
    status
  ) {
    this.OrderNo = OrderNo;
    this.client_name = client_name;
    this.unit = unit;
    this.contact_num = contact_num;
    this.order = order;
    this.deposit = deposit;
    this.balance = balance;
    this.measured_by = measured_by;
    this.u_front_length = u_front_length;
    this.u_back_length = u_back_length;
    this.u_shoulder = u_shoulder;
    this.u_arm_hole = u_arm_hole;
    this.u_uag = u_uag;
    this.u_lag = u_lag;
    this.u_sleeve_length = u_sleeve_length;
    this.u_neck = u_neck;
    this.u_chest = u_chest;
    this.u_waist = u_waist;
    this.u_hip1 = u_hip1;
    this.u_hip2 = u_hip2;
    this.u_fig = u_fig;
    this.u_bust_distance = u_bust_distance;
    this.u_apex_h = u_apex_h;
    this.u_shoulder_distance = u_shoulder_distance;
    this.u_shoulder_blade_height = u_shoulder_blade_height;
    this.l_waist = l_waist;
    this.l_hip = l_hip;
    this.l_length = l_length;
    this.l_inner_seam = l_inner_seam;
    this.l_crotch = l_crotch;
    this.l_leg_dir = l_leg_dir;
    this.l_knee_cir = l_knee_cir;
    this.l_knee_height = l_knee_height;
    this.l_buttom_cir = l_buttom_cir;
    this.status = status;
  }
}

class DBOrders {
  constructor() {}

  getOrders() {
    let orders = [];
    let order = new Order();
    const id = "1gPkixDSbCfByADHAUxbWFQ3WZlzW6BUqtxtqNk45I-w";

    const shOrders = SpreadsheetApp.openById(id).getSheetByName("orders");

    let dataOrders = shOrders
      .getDataRange()
      .getValues()
      .slice(2);

    dataOrders.map(item => {
      item = {
        OrderNo: item[0],
        client_name: item[1],
        unit: item[2],
        contact_num: item[3],
        order: item[4],
        deposit: item[5],
        balance: item[6],
        measured_by: item[7],
        u_front_length: item[8],
        u_back_length: item[9],
        u_shoulder: item[10],
        u_arm_hole: item[11],
        u_uag: item[12],
        u_lag: item[13],
        u_sleeve_length: item[14],
        u_neck: item[15],
        u_chest: item[16],
        u_waist: item[17],
        u_hip1: item[18],
        u_hip2: item[19],
        u_fig: item[20],
        u_bust_distance: item[21],
        u_apex_h: item[22],
        u_shoulder_distance: item[23],
        u_shoulder_blade_height: item[24],
        l_waist: item[25],
        l_hip: item[26],
        l_length: item[27],
        l_inner_seam: item[28],
        l_crotch: item[29],
        l_leg_dir: item[30],
        l_knee_cir: item[31],
        l_knee_height: item[32],
        l_buttom_cir: item[33],
        status: item[34],
      };

      orders.push(item);
    });

    return orders;
  }
}