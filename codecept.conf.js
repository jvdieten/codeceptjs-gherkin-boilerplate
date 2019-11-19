exports.config = {
  timeout: 10000,
  output: './output',
  helpers: {
    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./output/",
      baseFolder: "./screenshots/base/",
      diffFolder: "./output/diff/"
    }
  },
  include: {},
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": false,
          "steps": true,
        }
      },
      "mochawesome": {
        "stdout": "./output/awesome.log",
        "options": {
          "reportDir": './output',
          "reportFilename": "boilerplate-test-report"
        },
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml"
        },
        "attachments": true //screenshot for a failed test
      }
    }
  },
  name: 'codeceptjs-boilerplate',
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/todo.steps.js']
  }
};
