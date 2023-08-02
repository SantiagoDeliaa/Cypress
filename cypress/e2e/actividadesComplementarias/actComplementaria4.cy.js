/// <reference types="cypress" />

describe("Activad Complementaria 4", () => {
    let datos

    before("Before", () => {
        cy.fixture('archivoFixture').then(archivoFixtureParametro => {
            datos = archivoFixtureParametro;
        })
    })

    beforeEach('beforeEach', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datos.username);
        cy.get('#pass').type(datos.password); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datos.msjError);
    });

})