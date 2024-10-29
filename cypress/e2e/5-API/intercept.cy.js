import {fakeCars} from '../../fixtures/fakeCarsData'

describe('API test', () => {
 
     beforeEach(() => {

     })

     it('Seccess login test', ()=> {
  //      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })

        let value = true
        cy.intercept('GET', '**/cars' , (req) => {
            req.reply((res) => {
            
                if(value)
                {
                    res.body = fakeCars
                } 
                });
          });
        

       // cy.intercept('GET', '**/cars' , { statusCode: 404, body: 'Not Found' })
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('mishap1234@gmail.com');
        cy.get('#signinPassword').type("qwertyQ1!");
        cy.contains('Login').click();

     })
 
 })