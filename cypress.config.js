const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4axu3f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app/',
    watchForFileChanges: false,
  },
});
