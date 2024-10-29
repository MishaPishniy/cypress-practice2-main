const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's16jjz',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: 'Test Report',
    embeddedScreenshots: true,
  }, // Пропущенная запятая здесь

  e2e: {
    env: {
      // baseUrl: process.env.BASE_URL || 'http://dev.example.com',
      devUrl: "http://prod.example.com",
      stagingUrl: 'http://staging.example.com',
      prodUrl: 'https://www.saucedemo.com/'
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
