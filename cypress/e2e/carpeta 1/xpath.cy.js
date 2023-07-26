/// <reference types="cypress"/>

describe('Actividad complementaria 3', () => {

    it('Usando Xpath', () => {
        cy.visit('')
        cy.contains('Iniciá sesión').dblclick()
        cy.xpath('/html/body/div[1]/div/div/div/form/div[1]/input').type(`pushingit`);
        cy.xpath('/html/body/div[1]/div/div/div/form/div[2]/input').type('123456!');
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click()
        cy.get("[id^='sen']").type("tarea 1")
        cy.get('#sendTask').click()
        cy.contains('tarea 1').click()
    });
});