class TestHelper {
  static siteUrl() {
    return (process.env.SITE_URL || 'http://localhost:8000');
  }
}

module.exports = TestHelper;
