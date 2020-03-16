

const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');


const tinderBot = async function () {

    let chromeCapabilities = Capabilities.chrome();
    chromeCapabilities.set("goog:chromeOptions", {
        args: [
            "--lang=en",
            "disable-infobars"
        ]
      });
    const driver = await new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
    
    await driver.get('https://www.tinder.com');

    await driver.wait(until.elementsLocated(By.css("div[role='dialog']")), 60000);
    await driver.sleep(4000);

    try {
        await (driver.findElement(By.css("button[aria-label='Log in with phone number']"))).click();
    } catch (e) {
        console.log("phone number not found");
        
        await driver.sleep(3000);
        await driver.findElement(By.xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/span/button')).click();
        
        await driver.sleep(3000);
        await (driver.findElement(By.css("button[aria-label='Log in with phone number']"))).click();
    }


    await driver.wait(until.elementsLocated(By.css("input[name='phone_number']")), 50000);

    await driver.findElement(By.css("input[name='phone_number']"))
        .sendKeys(9632477836);


    await driver.sleep(2000);

    await driver.findElement(By.xpath('//*[@id="modal-manager"]/div/div/div[2]/button')).click();

    await driver.sleep(20000);

    await driver.findElement(By.xpath('//*[@id="modal-manager"]/div/div/div[2]/button')).click();

    await driver.wait(until.elementsLocated(By.xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]')), 20000);

    await driver.findElement(By.xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]')).click();

    await driver.sleep(4000);

    await driver.findElement(By.xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]')).click();

    await driver.sleep(2000);

    const length = (await driver.getAllWindowHandles()).length;
    console.log('length of windows = ', length);

    // driver.switchTo()

        while(true) {
            await driver.sleep(1000);

            await driver
            .findElement(By.xpath('//*[@id="content"]/div/div[1]/div/div/main/div/div[1]/div/div[2]/div[4]/button'))
            .click();
            await driver.sleep(1000);
        }




        console.log("y shit");
    return driver;
}

tinderBot();