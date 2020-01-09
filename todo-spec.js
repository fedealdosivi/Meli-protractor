describe('angularjs homepage todo list', function() {


    const searchBar = element(by.className(''));

    beforeEach(function() {
        browser.get('https://www.mercadolibre.com.ar/');
    });

    it('Validate searching', function() {
        searchBar.sendKeys('leggings');
    });
});