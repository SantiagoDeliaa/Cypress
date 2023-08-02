/// <reference types="cypress" />

describe("Desafío01 - Yinet", () => {
    const numero = Math.floor(Math.random() * 1000);
    const numero1 = Math.floor(Math.random() * 2000);
    const numero2 = Math.floor(Math.random() * 3000);
    const numero3 = Math.floor(Math.random() * 4000);

    it('Deberia permitir completar una tarea', () => {
        cy.visit('');       //visit website using baseURL

        cy.get('#user').type(`pushingit${numero}`);
        cy.get('input#pass').type('123456!');
        cy.get('[Value="Female"]').check({ force: true });
        cy.get('[name$=y]').select('15');
        cy.contains('label', 'Month').siblings('div').children('#month').select('July');
        cy.get('[name^=ye]').select(64);
        cy.contains('button[type="submit"]', 'Regis',).click();

        cy.contains('To Do List').click();

        cy.get('input#task').type(`Tarea${numero1}`);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(`Tarea${numero2}`);
        cy.get('button#sendTask').click();
        cy.get('input#task').type(`Tarea${numero3}`);
        cy.get('button#sendTask').click();

        cy.get('li[class^="css"]').first().click();
        cy.get('li[class^="css"]').last().click();
        cy.get('li[class^="css"]').first().next().click();
        cy.contains('p',`Tarea${numero1}`).click();
    });
});