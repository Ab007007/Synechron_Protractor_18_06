describe('Switchto demo.', () => {

  
    it('Handle Alerts', () => {

        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://formy-project.herokuapp.com/switch-window');
        element(by.id('alert-button')).click();

        browser.switchTo().alert().getText().then(function (text){
            console.log(`Alert on popup - ${text}`);
        })

        browser.switchTo().alert().accept();
        
    });


    
    it('Handle multi browser', () => {

        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://www.irctc.co.in/eticketing/errors.html#');
        element(by.linkText('Contact Us')).click();
        browser.getAllWindowHandles().then(function (windowIds){
            console.log(`Parent window id ${windowIds[0]} and the child window id is ${windowIds[1]}` );
            browser.switchTo().window(windowIds[1]);
            element.all(by.tagName('a')).each(function (link){
                link.getText().then(function (text){
                    console.log("Hyperlink " + text);
                })
            });
            browser.switchTo().window(windowIds[0]);
            element.all(by.tagName('a')).each(function (link){
                console.log("Parent browser ");
                link.getText().then(function (text){
                    console.log("Hyperlink " + text);
                })
            });

        })
        
    });

    it('Handle fremes', () => {

        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.xpath("//iframe[contains(@src,'default')]")).getWebElement());
        browser.actions().
        dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).
        perform();
        browser.sleep(8000).then(function () {
        console.log("Test Ended ");
         });
    });
        
});
