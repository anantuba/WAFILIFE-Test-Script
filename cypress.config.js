const cypress = require("cypress")
const { defineConfig } = require("cypress")
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')

module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  charts: true,
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false
},

e2e: {
  setupNodeEvents(on, config) {
    on('before:run', async (details) => {
      console.log('override before:run')
      await beforeRunHook(details)
    })

    on('after:run', async () => {
      console.log('override after:run')
      await afterRunHook()
    })
  },
  setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on)
  },
experimentalRunAllSpecs: false,
testIsolation: false
},

retries: {"runMode": 1, "openMode": 1},
watchForFileChanges: false,
screenshotOnRunFailure: true,
watchForFileChanges: false,
video: true,
redirectionLimit: 20,
defaultCommandTimeout: 5000,
pageLoadTimeout: 60000,
requestTimeout: 5000,
responseTimeout: 3000,
execTimeout: 60000,
defaultCommandTimeout: 10000,
component: {
  viewportWidth: 500,
  viewportHeight: 500
}
})
