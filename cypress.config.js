const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    reportPageTitle: 'Desafio técnico - Banco Carrefour',
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: "Relatório de testes de API"
  },
  e2e: {
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    stepDefinitions: ['cypress/e2e/api/steps/**/*.{js,ts}'],
  },
  env: {
    apiUrl: 'https://serverest.dev',
  },
});