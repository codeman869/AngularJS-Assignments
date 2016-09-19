describe('angularjs Lunch Container', function(){
    var button = element(by.css('.btn'));
    var field = element(by.model('list'));
    var message = element(by.css('.message'));

    beforeEach(function(){
        browser.get('http://localhost:3000/');

    });

    it('should have a title', function(){
        browser.get('http://localhost:3000/');

        expect(browser.getTitle()).toEqual('Lunch Checker');

    });

    it('should produce an error when no items are input',
        function(){
            button.click();
            expect(message.getText()).toEqual('Please enter data first!');
            expect(message.getAttribute('class')).toMatch(/\s+alert-warning\s*/);
        });

    it('should produce Enjoy! When 1 - 3 items are entered', function(){
        field.sendKeys('potatoes');
        button.click();
        expect(message.getText()).toEqual('Enjoy!');

        field.sendKeys(', greens');
        button.click();
        expect(message.getText()).toEqual('Enjoy!');

        field.sendKeys(', sandwiches');
        button.click();
        expect(message.getText()).toEqual('Enjoy!');

    });

    it('should produce Too much! when 4 or more items are entered', function(){
        field.sendKeys('potatoes, greens, sandwiches, ice cream');
        button.click();
        expect(message.getText()).toEqual('Too much!');

    });

});