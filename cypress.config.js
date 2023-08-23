const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '42x1mt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app/',
    watchForFileChanges: false,
    defaultCommandTimeout: 30000
  },
  env: {
    username: 'pushinit',
    password: '123456!',
      },
}); 

//npx cypress run --record --key 2c7daddc-c499-415b-bb55-63886bde9a43