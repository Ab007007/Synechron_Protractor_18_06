describe('First Test...', () => {
    
    it('Test Case - 1', () => {
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
        
        browser.sleep(8000).then(function () {
            console.log("Test Ended ");
        });

        
    });


});