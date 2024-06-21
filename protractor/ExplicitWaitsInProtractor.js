describe('Explicit Wait', () => {
    beforeEach(function ()
    {
        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://formy-project.herokuapp.com/form');
          
    })
  
    it('Test Case - 1', () => {
       element(by.id('first-name')).sendKeys("Aravidda");
       
       element(by.id('select-menu')).element(by.css("option[value='2']"));

       element(by.linkText('Submit')).click();
       
       var EC = protractor.ExpectedConditions;
       browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='alert alert-success']"))));
       
       element(by.xpath("//div[@class='alert alert-success']")).getText().then(function(text){
            console.log(`Success message ${text}`);
       });

    });
        
});
