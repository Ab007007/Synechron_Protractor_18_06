describe('Actions Demo', () => {

  
    it('Test Case - 1', () => {

        browser.waitForAngularEnabled(false)
        console.log("Test Started...");
        browser.get('https://formy-project.herokuapp.com/keypress');
        browser.actions().
        mouseMove(element(by.id('name')))
        .click()
        .perform();
        browser.sleep(8000).then(function () {
        console.log("Test Ended ");
         });
    });

    it('Test Case - 2', () => {

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
