const { Builder, until, By } = require('selenium-webdriver')

async function testContent() {
    let driver = await new Builder().forBrowser("chrome").build()
    try {
        await driver.get('http://localhost:4200/contact')       
        let contentElement = await driver.wait(
            until.elementLocated(By.id('content-id')), 3000
        )

        console.log(await contentElement.getText())

    } catch (error) {
        console.error('An error occurred:', error)
    } finally {
        console.log('Finish')
        await driver.quit()
    }
}

testContent()
