const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
    // Запуск браузера перед каждым сценарием
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    console.log("Браузер запущен, страница создана.");
});

After(async function () {
    // Закрытие браузера после каждого сценария
    if (this.browser) {
        await this.browser.close();
        console.log("Браузер закрыт.");
    }
});