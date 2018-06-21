var url = require('../../testresources/urldata');

var annaunivpageobj,annaunivsec;
function pageobj(browser) {
    annaunivpageobj = browser.page.AnnaUnivPage();
     annaunivsec = annaunivpageobj.section.AnnaUnivPage_section;
}


module.exports = function(){

    this.Given(/^User can access the url$/, function (client) {
       client
           .deleteCookies()
           .maximizeWindow()
           .url(url.url.annaUniv_url)
           .waitForElementVisible('body', 1000)
    });

        this.When(/^Departments page loads$/, function (client) {
            pageobj(client);
            annaunivsec
                .click("@Departments");
            client
                .pause(2000)
                .assert.title('Anna University - Departments','assert failed message')

        });

        this.When(/^Institute of Ocean Management page loads$/, function (client) {
            pageobj(client);
            client
                .pause(1000);
            annaunivsec
                .moveToElement('@Faculty_Civil_Engineering',1,1)
                .moveToElement('@Institute_Ocean_Management',1,1)
                .click('@Institute_Ocean_Management')
            client
                .pause(3000)
                .assert.title('Institute For Ocean Management - Anna University offers M.Tech in Coastal Management. ENVIS Center for Coastal Zone Management and Coastal Shelterbelts')


        });


        this.Then(/^Coastal pollution monitoring and hazards page loads$/, function (client) {
            pageobj(client);

            annaunivsec
                    .moveToElement('@Research_Themes',1,1)
                    .moveToElement('@Coastal_Monitoring_Hazards',1,1)
                    .click('@Coastal_Monitoring_Hazards')
            client
                    .pause(3000)
                    .assert.title(":: IOM - Institute For Ocean Management - Anna University ::")
                .execute("window.open('')")
                .pause(3000)
            .windowHandles(function (result) {
                client
                    .switchWindow(result.value[1])
                    .pause(3000)
                    .closeWindow()
                    .switchWindow(result.value[0])
            });



        });
};