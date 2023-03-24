
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('This makes sure the choose header is diplayed', async () => {
    await driver.findElement(By.id('draw')).click()
    const title = await driver.findElement(By.id('choose-header'))
    const displayed = await title.isDisplayed()

    expect(displayed).toBe(true)
})

test('This makes sure that the your duo title pops up', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const title = await driver.findElement(By.id('your-duo-header'))
    const displayed = await title.isDisplayed()

    expect(displayed).toBe(true)
})