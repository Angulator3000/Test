const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Given('Я нахожусь на странице авторизации', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/login');
    console.log("Перешел на страницу авторизации");
});

When('Я ввожу корректные данные', async () => {
    await page.fill('#username', 'tomsmith');
    console.log("Ввел логин");
    await page.fill('#password', 'SuperSecretPassword!');
    console.log("Ввел пароль");
    await page.click('button[type="submit"]');
    console.log("Нажал на кнопку");
});

Then('Я должен увидеть страницу профиля', async () => {
    const url = await page.url();
    const expectedUrl = 'https://the-internet.herokuapp.com/secure';
    if (url === expectedUrl) {
        console.log("Успешная авторизация. URL совпадает.");
    } else {
        console.log("Авторизация не успешна. URL не совпадает.");
    }
    console.log(`Текущий URL: ${url}`);
    await browser.close();
});