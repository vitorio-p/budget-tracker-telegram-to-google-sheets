# budget-tracker-telegram-to-google-sheets

https://github.com/vitorio-p/budget-tracker-telegram-to-google-sheets/assets/64684609/431817f6-986c-4f7d-a490-af0aa0f2b9af


Track your spendings by sending a message to the Telegram bot and let the power of automation help in filling up the Google Sheets. 


## Pros

- Free
- Cross-platform
- Easy to use

## Walkthrough

**Setting up Telegram bot**

1. Find `@BotFather` in Telegram
2. `/start`
3. `/newbot`
4. Give the bot a name
5. Give the bot a username
6. Get Telegram bot HTTP API token

**Setting up Apps Script**

1. Open a new Google Sheet - the URL will contain `googleSheetId`
2. Go to `Extensions` -> `Apps Script`
3. Allow all permission requests
4. Copy and paste the code in `Code.gs` into the Editor
5. Replace all `<variables>` with your own
   - `token` - Telegram bot HTTP API token
   - `webAppUrl` - once you deploy the Apps Script, you will be able to copy paste this from the success modal
   - `adminID` - use `@userinfobot` in Telegram and `/start` to find your personal Telegram Id
   - `googleSheetId` - `https://docs.google.com/spreadsheets/d/<googleSheetId>/edit...`
6. Deploy the Apps Script
   - Change who has access to **Anyone** (before changing to **Anyone**, I was unable to send any message from Telegram to Apps Script)
7. Run setWebHook function

![image](https://github.com/vitorio-p/budget-tracker-telegram-to-google-sheets/assets/64684609/b7fe43b3-3d00-4afa-9fb0-2be2c2788afc)

8. Once Webhook is set, you should be able to send a message to the Telegram bot to track your spendings!
   - Message has to be in the format of `<category> <cost> <description>`

## License

[MIT](https://choosealicense.com/licenses/mit/)
