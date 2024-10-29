describe('Advanced actions', () => {

    it('clear', () => {
        cy.visit(Cypress.env('devUrl'));
        cy.get('[data-test="username"]').type('test string');
        cy.get('[data-test="username"]').clear();
        cy.get('[data-test="username"]').type('test string2');

    })


    it('select', () => {
        cy.visit(Cypress.env('prodUrl'));
        //cy.visit('https://practice.expandtesting.com/dropdown');
        cy.get('#country').select('Andorra');
        cy.get('#country').select('AR');
    })


    it('check/uncheck', () => {
        cy.visit(Cypress.env('devUrl'));
        cy.get('#checkbox1').check();
        cy.get('#checkbox2').uncheck();
    })


    it('scroll', () => {
        cy.visit(Cypress.env('prodUrl'));
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
        cy.get('[data-test="footer"]').scrollIntoView();
    })

    it('submit', () => {
        cy.visit(Cypress.env('prodUrl'));
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('form').submit();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');

    })

    it('file upload', () => {
        cy.visit(Cypress.env('devUrl'));
        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json');
        cy.get('form').submit();


    })


    it('go', () => {
        cy.visit(Cypress.env('devUrl'));
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('form').submit();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
        cy.go('back');
        cy.go('forward');

        cy.wait(2000);
        cy.reload();

        cy.get().should('contain.text')


    })

    it.only('should', () => {
        cy.visit(Cypress.env('devUrl'));
        cy.get('[data-test="username"]')
            .should('have.attr', 'placeholder', 'Username')

        const number = -2;
        //expect(number).to.be.at.least(1);
        cy.wrap(number).should('be.greaterThan', 1);
 


    })





})