const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});/*
module.exports = defineConfig({
    // These settings apply everywhere unless overridden
    defaultCommandTimeout: 5000,
    /!*viewportWidth: 1000,
    viewportHeight: 600,*!/
    // Viewport settings overridden for component tests
    /!*component: {
        viewportWidth: 500,
        viewportHeight: 500,
    },*!/
    // Command timeout overridden for E2E tests
    e2e: {
        defaultCommandTimeout: 10000,
    },
})
Cypress.config('pageLoadTimeout', 100000)

Cypress.config('pageLoadTimeout')*/