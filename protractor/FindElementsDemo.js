describe('First Test...', () => {
    beforeEach(function ()
    {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
          
    })

    function add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
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
    }

    it('Test Case - 1', () => {
       
        add(25,25);
        add(10,10);
        add(30,30);

        element.all(by.repeater('result in memory')).each(function (row,index)
        {
            row.getText().then(function(text){
                console.log(`Item at index : ${index} is ${text}`);   
            })
         
        })
    });
        
});
