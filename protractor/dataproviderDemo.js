var Object = require("./data/Object.json")
var using = require('jasmine-data-provider');


describe('Data provider Demo.', () => {
    beforeEach(function ()
    {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
          
    })

    using([{a: 5, b: 10},
            {a: 15, b: 10},
            {a: 25, b: 10},
            {a: 35, b: 10},
            {a: 45, b: 10},
            {a: 55, b: 10}],function(data){

                it('Handle Alerts', () => {                 
                    element(by.model(Object.locators.homepage.modleFN)).sendKeys(data.a);
                    element(by.model(Object.locators.homepage.modleSN)).sendKeys(data.b);
                    element(by.id(Object.locators.homepage.idButton)).click().then(function(){
                        browser.sleep(2000).then(function () {
                            console.log("Test Ended ");
                        });
                    });
                    
                });


    })
  


        
});
