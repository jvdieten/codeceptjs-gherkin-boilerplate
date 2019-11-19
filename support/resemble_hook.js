const event = require('codeceptjs').event;
const extension = '.png';
const {I} = inject();
module.exports = function () {

  event.dispatcher.on(event.test.passed, function (test) {

    return new Promise(async (doneFn) => {
      await I.saveScreenshot(test.title + extension);
      await I.seeVisualDiff(test.title + extension, {
        tolerance: 2,
        prepareBaseImage: false
      }).catch(() => {
        doneFn();
      }).finally(() => {
        doneFn();
      });
    }).catch(() => {
    }).finally(() => {
    });
  });
};
