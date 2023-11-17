import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '2ue3j2',
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4200',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
});

