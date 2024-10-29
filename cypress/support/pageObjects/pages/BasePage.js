/// <reference types="cypress" />

export default class BasePage {
    constructor() {
        
        this.baseURL = Cypress.env('prodUrl')
    }

    open(url = '') {
        // Використовуємо baseUrl і додаємо відносний шлях, якщо передано
        cy.visit(url || this.baseURL);
    }
}
