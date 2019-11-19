const codeceptConfig = require('./codecept.conf');
const TestHelper = require('./support/TestHelper');

const resembleHelper = codeceptConfig.config.helpers.ResembleHelper;
codeceptConfig.config.helpers = {
  Puppeteer: {
    url: TestHelper.siteUrl(),
    show: true,
    chrome: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    },
  },
  resembleHelper
};

exports.config = codeceptConfig.config;
