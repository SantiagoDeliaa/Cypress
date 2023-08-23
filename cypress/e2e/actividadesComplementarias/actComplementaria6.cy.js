import { LoginPage } from '../../loginPagesupport/pages/loginPage'
import { ToDoListPage } from '../../toDoListPagesupport/pages/toDoListPage';

describe('Actividad complementaria 6', () => { 
    let data;
    const loginPage = new LoginPage();
    const toDoListPage = new ToDoListPage();

        beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario(Cypress.env('username'));
            loginPage.escribirContraseña(Cypress.env('password'));
            cy.get('#submitForm').click(); // utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
        it("deberia verificar que los botones existen", () =>{
            cy.get('#all').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get('#completed').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get('#active').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get('#removeAll').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
});