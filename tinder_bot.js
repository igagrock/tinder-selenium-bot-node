const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');

const loginDialog = By.css("div[role='dialog']");
const phoneLoginButton = By.css("button[aria-label='Log in with phone number']");
const newPhoneLoginButton = By.xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/span/div[2]/button');

const moreOptions = By.xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/span/button');


let chromeCapabilities = Capabilities.chrome();
    chromeCapabilities.set("goog:chromeOptions", {
        args: [
            "--lang=en",
            "disable-infobars"
        ]
      });
    const driver =  new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();

    driver.get('https://www.tinder.com')
    .then(()=>{
        driver.wait(until.elementsLocated(loginDialog), 60000);
    })
    .then(() => driver.sleep(4000))
    .then(()=>{
        console.log('clicking the login');
        return driver.findElement(phoneLoginButton);
    })
    .then(
        (element) => element.click(),
        (error) =>{
            console.log("login button was not found ");
            driver.sleep(4000);
            driver.findElement(moreOptions).click(); 
            driver.sleep(2000);
            driver.findElement(newPhoneLoginButton).click(); 
        })
     .then(()=> {
         console.log("adding phone number");
         driver.sleep(2000);
         return driver.wait(until.elementsLocated(By.css("input[name='phone_number']")), 60000);
        //  driver.findElement(By.css("input[name='phone_number']"))
        // .sendKeys(99999999999);
     }).then(webElements => {
         console.log("webElements =>" ,webElements);
         webElements[0].sendKeys(9999999999);
     })
    ;

    