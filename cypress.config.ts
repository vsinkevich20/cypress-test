import { defineConfig } from 'cypress';
import { configurePlugin} from 'cypress-mongodb';

export default defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://testUser:qwerty12345@5.189.186.217:27017/?authMechanism=DEFAULT',
      database: 'admin',
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  projectId: '2ue3j2',
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      configurePlugin(on);
      const email = process.env.EMAIL;
      const password = process.env.PASSWORD;
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

