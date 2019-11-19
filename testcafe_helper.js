const Helper = codeceptjs.helper;

class TestCafeHelper extends Helper {

  _before() {
    const {t} = this.helpers.TestCafe;
    t.setTestSpeed(0.8);
  }

}

module.exports = TestCafeHelper;
