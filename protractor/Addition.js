describe('Addition feature', () => {
    
    it('Test Case - 1', () => {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
       
        element(by.model('first')).sendKeys(123);

        element(by.model('second')).sendKeys(123);

        element(by.id('gobutton')).click().then(function(){
            browser.sleep(10000).then(function () {
                console.log("Test Ended ");
            });
        });
        
    });


});