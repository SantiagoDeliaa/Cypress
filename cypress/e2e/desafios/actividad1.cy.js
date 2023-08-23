 /// <reference types="cypress" />

describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other // recie
    });
});