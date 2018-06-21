var url = require('../../testresources/urldata');
var crosswordpage,mainpage,size,array = [];
function pageobj(browser){
    crosswordpage = browser.page.CrosswordPage();
    mainpage = crosswordpage.section.mainpage;
}
module.exports = function() {
    this.Given(/^The crossword page url is loaded$/, function(client) {
        client
            .deleteCookies()
            .maximizeWindow()
            .url(url.url.crossword_url)
            .waitForElementVisible('body', 1000)
    });
    this.When(/^User desired item is searched$/ , function(client){
    pageobj(client);
    mainpage
        .sendKeys('@Searchbox','Cricket')
        .click('@Search');
        client.pause(1000);
        client
            .getText('.bn-message',function(result){
                size = result.value.substring(8,10);
                console.log(size);

            });


    });
    this.Then(/Sorting result is printed$/, function(client) {
        pageobj(client);
        var str = 0;
        size = parseInt(size);
        console.log(str, size);
        while(str!=4) {
        // do{
            client
                .execute(function () {
                    window.scrollBy(0, document.body.offsetHeight);
                }, []);
            console.log(str, size);
            client
                .pause(3000);
            str++;
                    }
                    //while(client.waitForElementVisible('.infi-wrapper',1000,false));
        //console.log(client.isVisible('.infi-wrapper'));
            client
                .elements('css selector',".variant-final-price",function(result){
                    result.value.forEach(function(element) {
                        client.elementIdAttribute(element.ELEMENT,'text',  function (attribute) {
                            console.log(attribute.value);
                        });
                    });
                    //console.log(client.getText('.variant-final-price'));

                    //console.log(result.getAttribute());

                //.getText('.variant-final-price', function (result) {
                //         result.value.forEach( function(element) {
                //             array.push(element);
                //             console.log(array);

                // })


                });

        });
};


