describe('Muany tests in One Demo.', () => {
    
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

    it('Test Case - 2', () => {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
       
        element(by.model('first')).sendKeys(13);

        element(by.model('second')).sendKeys(13);

        element(by.id('gobutton')).click().then(function(){
            browser.sleep(10000).then(function () {
                console.log("Test Ended ");
            });
        });
        
    });

    it('Test Case - 3', () => {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
       
        element(by.model('first')).sendKeys(12);

        element(by.model('second')).sendKeys(12);

        element(by.id('gobutton')).click().then(function(){
            browser.sleep(10000).then(function () {
                console.log("Test Ended ");
            });
        });
        
    });


});