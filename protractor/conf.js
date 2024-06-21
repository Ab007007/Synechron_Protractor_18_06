var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');


var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html',
  captureOnlyFailedSpecs: true
});

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['development.js'],
    framework: 'jasmine2',

    suites : {
        smoke : ['./Actions.js','./multipletests.js','./switchToDemo.js'],
        regression : ['*.js']
    },
    capabilities : {
        'browserName' : 'firefox'
    },

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
  };