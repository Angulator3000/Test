const { When, Then } = require('@cucumber/cucumber');
const {Given} = require('./common.steps')

When('Я ввожу не корректные данные', async function () {
    await this.page.fill('#username','Oleg');
    await this.page.fill('#password','Oleg');
    console.log("Ввел не корректные данные");
    await this.page.click('button[type="submit"]');
    console.log("нажал на кнопку вхождения")  
})

Then('на странице должен появится див с айди flash-messages', async function () {
    try {
        // Ожидаем появления элемента с ID 'flash-messages' в течение 5 секунд
        await this.page.waitForSelector('#flash-messages', { state: 'visible', timeout: 5000 });
        console.log("Элемент с ID 'flash-messages' найден и видим на странице.");

        // Получаем текст элемента (если нужно)
        const flashElement = await this.page.locator('#flash-messages');
        const flashText = await flashElement.textContent();
        console.log(`Текст сообщения: ${flashText}`);
    } catch (error) {
        // Если элемент не появился или не стал видимым, выбрасываем ошибку
        console.error("Элемент с ID 'flash-messages' не появился на странице.");
        throw new Error("Элемент с ID 'flash-messages' не появился на странице.");
    } finally {
        // Закрываем браузер в любом случае
        await this.browser.close();
    }

    // const flashElement = this.page.locator('#flash-messages'); // Исправлено на #flash, как в вашем HTML
    //  // Проверяем, что элемент видим
   
})