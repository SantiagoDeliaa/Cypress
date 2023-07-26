
describe('Prueba con el pt de sebastian', () => {
    

    it('roostrap', () => {
        cy.visit('https://www.rootstrap.com/')
        cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
        })
        cy.get('.max-w-hero-2 > .button-flex > .button').invoke('removeAttr', 'target').click()
        cy.url().then((currentUrl) => {
            expect(currentUrl).to.equal('https://www.rootstrap.com/contact')
        })
    })
    
})     