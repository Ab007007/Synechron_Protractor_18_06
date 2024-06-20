exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['development.js'],

    capabilities : {
        'browserName' : 'firefox'
    }
  };