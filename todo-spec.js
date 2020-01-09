describe('angularjs homepage todo list', function() {


    const searchBar = element(by.className('nav-search-input'));
    const searchBtn = element(by.className('nav-search-btn'));
    const searchResults = element(by.id('searchResults'));
    const EC = protractor.ExpectedConditions;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.mercadolibre.com.ar/');
    });

    it('Validate searching', function() {
        searchBar.sendKeys('Aldosivi');
        searchBtn.click();
        browser.wait(EC.visibilityOf(searchResults), 5000);
    });
});