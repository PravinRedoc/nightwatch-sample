var seleniumserver = require('selenium-server');
var chromedriver = require('chromedriver');
var iedriver = require('iedriver');
var geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
    "stepTimeout" : 400000,
    "defaultTimeoutInterval":900000,
    "nightwatchClientAsParameter": true

});

module.exports = {
    "output_folder": "reports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "repository",
    "globals_path": "./features/global-module",

    "selenium": {
        "start_process": true,
        "server_path": seleniumserver.path,
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": chromedriver.path,
           "webdriver.gecko.driver" : geckodriver.path,
            "webdriver.edge.driver": iedriver.path
        }

    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": true,
                "path": "screenshots"
            },
            "desiredCapabilities": {
                "browserName": "chrome",
            }
        },
            "chrome": {
                "desiredCapabilities": {
                    "browserName": "chrome",
                    "javascriptEnabled" : "true",
                     "acceptSslCerts": true



            }
        },
        "firefox":{
        "desiredCapabilities": {
            "browserName": "firefox",
            "marionette": true
        }

        },


        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge"
            }
        }
    }
};
