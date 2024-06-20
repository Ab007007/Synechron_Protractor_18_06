describe('First Test...', () => {
    beforeEach(function ()
    {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
          
    })


    it('Test Case - 1', () => {
        element(by.model('first')).sendKeys(123);
        element(by.model('second')).sendKeys(123);
        element(by.id('gobutton')).click().then(function(){
            browser.sleep(5000).then(function () {
                console.log("***************");
                element(by.binding('latest')).getText().
                then(function(text){
                    console.log(`sum of two numbers is ${text}`);
                })
                console.log("Test Ended ");
                });
         
            });
    });
        
});
