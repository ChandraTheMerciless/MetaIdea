describe('Creating a new problem', function() {
    it('should create a new problem', function() {
        browser.get('http://localhost:9090/login.html');
        browser.waitForAngular();
        element(by.model('loginData.username')).sendKeys('test');
        element(by.model('loginData.password')).sendKeys("rseco82");
        element(by.css('.btn')).click();
        browser.waitForAngular();
        browser.get('http://localhost:9090/#/createproblem');
        element(by.model('problem.title')).sendKeys('Creating a new problem');
        element(by.model('problem.description')).sendKeys("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        element(by.id('newProblem')).click();
        browser.waitForAngular();
        
        //
        //var todoList = element.all(by.repeater('todo in todoList.todos'));
        //expect(todoList.count()).toEqual(3);
        //expect(todoList.get(2).getText()).toEqual('write first protractor test');
        //
        //// You wrote your first test, cross it off the list
        //todoList.get(2).element(by.css('input')).click();
        //var completedAmount = element.all(by.css('.done-true'));
        //expect(completedAmount.count()).toEqual(2);
    });
});
