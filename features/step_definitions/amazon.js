data= require('../../testresources/urldata');


var amazonpageobj,amazonsec;
function pageobj(browser){
    amazonpageobj = browser.page.AmazonPage();
    amazonsec = amazonpageobj.section.AmazonPage_section;
}
module.exports = function() {
    this.Given(/^User launches url$/,function(client){
        client
            .deleteCookies()
            .maximizeWindow()
            .url(data.url.amazon_url)
            .waitForElementVisible('body', 3000)

    });
    this.When(/^User searches for "([^"]*)"$/,function(client,val){
    pageobj(client);
    amazonsec
        .sendKeys('@SearchInput',val)
        client.keys('\uE007')
    });
    this.Then(/^The selected picture's alt attribute is printed$/,function(client){
        pageobj(client);

        amazonsec.getAttribute('@SelectedObject', "alt", function(result) {
            console.log(result.value)
            // this.assert.equal(typeof result, "object");
            // this.assert.equal(result.status, 0);
            // this.assert.equal(result.value, "#home");
        });


    });
};
