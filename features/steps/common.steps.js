const { Given } = require('@cucumber/cucumber');

Given('Я нахожусь на странице авторизации', async function () {
    await this.page.goto('https://the-internet.herokuapp.com/login');
    console.log("Перешел на страницу авторизации");
});