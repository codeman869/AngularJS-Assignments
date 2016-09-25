describe('Angular JS Shopping List Functionality', function() {
    var toBuyList = element.all(by.repeater('item in toBuy.items'));//.column('item.name'));
    var boughtList = element.all(by.repeater('item in bought.items'));//.column('item.name'));
    var button = element.all(by.repeater('item in toBuy.items')).first()
            .element(by.buttonText('Bought'));
    var messageDiv = element(by.css('.emptyMessage'));


    beforeEach(function(){
        browser.get('http://localhost:3000/');

    });


    it('the to buy list should populate with at least 5 items', function(){
        expect(toBuyList.count()).not.toBeLessThan(5);
        // expect(toBuyList.count()).toEqual(5);
    });

    it('should start with an empty list of bought items', function(){
        expect(boughtList.count()).toEqual(0);
    });

    it('clicking the bought button will add it to the bought list', function(){
       
        

        toBuyList.count().then(count => {
            var toBuyCount = count;
            boughtList.count().then(count => {
                var boughtListCount = count;
                button.click();

                expect(toBuyList.count()).toEqual(toBuyCount - 1);
                expect(boughtList.count()).toEqual(boughtListCount + 1);

            });

        });
    });

    it('should have a correctly formatted to buy list', function(){
        var text = toBuyList.first().getText();
        var regex = /buy\s+\d+\s+[a-z]+/i;
        expect(text).toMatch(regex);

    });

    it('should have a correctly formatted bought list', function(){
        button.click();

        var text = boughtList.first().getText();
        var regex = /bought\s+\d+\s+[a-z]+/i;

        expect(text).toMatch(regex);

    });

    it('should display nothing bought when loaded', function(){
        var message = messageDiv.getText();
        expect(message).toEqual('Nothing bought yet.');

    });

    it('should display everything bought when all buttons clicked', function(){
        button.click();
        button.click();
        button.click();
        button.click();
        button.click();
        var message = messageDiv.getText();
        expect(message).toEqual('Everything is bought!')

    });

    it('should have a title', function(){

        // browser.get('http://localhost:3000/');

        expect(browser.getTitle()).toEqual('Shopping List Check Off');
    });

});


