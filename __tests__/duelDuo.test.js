const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test('clicking draw displays the div with id=choices', async () => {
    //navigate to the app
    await driver.get("http://localhost:8000")
    //find and select the draw button
    await driver.findElement(By.css('button[id="draw"]')).click()
    //wait to see if it displays the div with id=choices
    await driver.wait(until.elementLocated(By.css('#choices')))
  });

  test('clicking see all bots displays the div with id=all-bots', async () => {
    //navigate to the app 
    await driver.get("http://localhost:8000")
    //find and select the add to duo button
    await driver.findElement(By.css('button[id="see-all"]'))
    //wait to see if it displays the div with id=see-all
    await driver.wait(until.elementLocated(By.css('#see-all')))
  })
});