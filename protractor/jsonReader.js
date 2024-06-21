var Object = require("./data/Object.json")

describe('Json Reader', () => {

  
    it('Handle Alerts', () => {

        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get(Object["angular-url"]);
        
        element(by.model(Object.locators.homepage.modleFN)).sendKeys(13);
        element(by.model(Object.locators.homepage.modleSN)).sendKeys(13);
        element(by.id(Object.locators.homepage.idButton)).click().then(function(){
            browser.sleep(10000).then(function () {
                console.log("Test Ended ");
            });
        });
        
    });

        
});
