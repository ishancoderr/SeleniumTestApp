const { Builder, until, By } = require('selenium-webdriver')

async function testContent() {
    let driver = await new Builder().forBrowser("chrome").build()
    try {
        await driver.get('http://localhost:4200/contact')       
        let contentElement = await driver.wait(
            until.elementLocated(By.id('content-id')), 3000
        )

        let contentText = await contentElement.getText()
        console.log("Content Text:", contentText);

        // Check the number of characters 
        if (contentText.length < 1000) {
            console.log("Test Passed: Content has less than 1000 characters.");
        } else {
            console.log("Test Failed: Content has 1000 or more characters.");
        }

    } catch (error) {
        console.error('An error occurred:', error)
    } finally {
        console.log('Finish')
        await driver.quit()
    }
}

testContent()
