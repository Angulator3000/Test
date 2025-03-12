const { When, Then } = require('@cucumber/cucumber');
const {Given} = require('./common.steps')
When('Я ввожу корректные данные', async function(){
    await this.page.fill('#username', 'tomsmith');
    console.log("Ввел логин");
    await this.page.fill('#password', 'SuperSecretPassword!');
    console.log("Ввел пароль");
    await this.page.click('button[type="submit"]');
    console.log("Нажал на кнопку");
});

Then('Я должен увидеть страницу профиля', async function() {
    // получаем URL
    const url = await this.page.url();
    // Это верный URL он не меняется
    const expectedUrl = 'https://the-internet.herokuapp.com/secure';
    // Проверка на совпадение
    if (url === expectedUrl) {
        console.log("Успешная авторизация. URL совпадает.");
    } else {
        console.log("Авторизация не успешна. URL не совпадает.");
    }
    console.log(`Текущий URL: ${url}`);
    
});