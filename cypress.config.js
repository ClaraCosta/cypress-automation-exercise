const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    experimentalRunAllSpecs: true,
    }

 })  


