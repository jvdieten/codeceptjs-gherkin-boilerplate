const codeceptConfig = require('./codecept.conf');
const TestHelper = require('./support/TestHelper');

const resembleHelper = codeceptConfig.config.helpers.ResembleHelper;

codeceptConfig.config.helpers = {

  TestCafe: {
    url: TestHelper.siteUrl(),
    browser: 'chrome',
    show: true
  },
  TestCafeHelper: {
    require: "./testcafe_helper.js"
  },
  resembleHelper

};

exports.config = codeceptConfig.config;
