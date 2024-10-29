describe('Request', () => {
 
     beforeEach(() => {

     })

     it('Request then GET', ()=> {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((Response)=>{

            cy.log(JSON.stringify(Response.body))
            })
        })    
        

    it('Request it GET', ()=> {

     cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('body').should("have.length",10)
     cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('status').should("eq",200)
    })


    
    it('Request POST', ()=> {

      const newPost = {
        title: 'New',
        body: 'bar',
        userId: 1
      };
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).as('postRespons').its('body.id').should("eq",101)
      cy.get('@postRespons').its('body.title').should('eq', newPost.title)
      cy.get('@postRespons').its('body.body').should('eq', newPost.body)
       })



 })