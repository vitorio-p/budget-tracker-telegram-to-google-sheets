const token = '<insert Telegram bot token>';
const telegramUrl = "https://api.telegram.org/bot" + token;
const webAppUrl = '<insert Apps Script Web app URL>'
const adminID = <insert Telegram user ID>;
const googleSheetId = "<insert Google Sheets ID>"

function getMe() {
  const url = telegramUrl + "/getMe";
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function setWebHook() {
  const url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function sendText(id, text) {
  const url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + text;
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function doGet(e) {
  return HtmlService.createHtmlOutput("hello world");
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData ? e.postData.contents : '{}');
    const chatId = data.message.chat.id;
    const text = data.message.text;

    sendText(chatId, "received your message: " + text);

    SpreadsheetApp.openById(googleSheetId).getSheets()[0].appendRow([new Date(), text]);

    const parts = text.split(" ");
    const category = parts[0];
    const cost = parts[1];
    const description = parts.slice(2).join(" ");;

    sendText(chatId, "category is " + category);
    sendText(chatId, "cost is " + cost);
    sendText(chatId, "description is " + description);
    const sheet = SpreadsheetApp.openById(googleSheetId).getSheetByName(category) ? SpreadsheetApp.openById(googleSheetId).getSheetByName(category) : SpreadsheetApp.openById(googleSheetId).insertSheet(category);
    sheet.appendRow([new Date(), cost, description]);
    sendText(chatId, "your spending of S$" + cost + " for " + description + " is now added to the sheet '" + category + "'");

  } catch (error) {
    sendText(adminID, "Error: " + error.message);
  }
}