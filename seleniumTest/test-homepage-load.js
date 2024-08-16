const { Builder, By, Key, until } = require('selenium-webdriver')

async function checkHomepage() {
    let driver = await new Builder().forBrowser("chrome").build()
    try {
        await driver.get('http://localhost:4200/contact')
        await driver.wait(until.titleIs('Contact-GoBLU'),5000)

    }catch (error) {
        console.error('An error occurred:', error)
    } finally {
        console.log('Finish')
        await driver.quit()
    }
}

checkHomepage()



