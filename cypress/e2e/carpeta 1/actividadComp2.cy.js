/// <reference types="cypress" />

describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000);
    
    it('Actividad complementaria 2', () =>{
        cy.visit('');
        cy.get('#user').type(`pushingit${numero}`); 
        cy.get('#user').clear();
        cy.get('input[id=user]').type(`test${numero}`);
        cy.get('.password').type('123456!');
        cy.log('test');
        cy.get('[Value="Female"]').check({force: true});
        cy.get('[name$=y]').select('20');
        cy.get('select#month').select('September');
        cy.get('select#year').select(10);
        cy.get('button#submitForm').click();
        cy.wait(5000);
        cy.contains('To Do List').click();
    });
});