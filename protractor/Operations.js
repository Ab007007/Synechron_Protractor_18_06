describe('Multiple Operations Demo', () => {
    beforeEach(function ()
    {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://juliemr.github.io/protractor-demo/');
          
    })
  

    function test(a,b,operation)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='"+operation+"']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click().then(function(){
            browser.sleep(5000).then(function () {
                console.log("***************");
                element(by.binding('latest')).getText().
                then(function(text){
                    console.log(`Result after perfroming ${operation} on two numbers is ${text}`);
                  
                })
                console.log("Test Ended ");
                });
         
            });
    }


    it('Test Case - 1', () => {
        test(2,3,"ADDITION");
       

    });

    it('Test Case - 2', () => {

        test(22,32,"SUBTRACTION");
    

    });
    it('Test Case - 3', () => {
 
        test(22,32,"MODULO");


    });
    it('Test Case - 4', () => {
        test(22,32,"MULTIPLICATION");


    });
    it('Test Case - 5', () => {

        test(22,32,"DIVISION");

    });

        
});
