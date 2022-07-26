describe("Curso de Cypress sección 1", () =>{

    it('Mi primer test -> Hola mundo', () => {
        cy.log("Hola Mundo")  
    })

    it('Segundo test -> Campo name', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(4000)
        cy.get("#userName").type("Carlos")
        cy.wait(4000)
        cy.get("#userEmail").type("HolaMundo@test.com")
        cy.get("#currentAddress").type("Dirección del primer test del Hola Mundo")
        cy.get("#permanentAddress").type("Confirmación de la dirección del primer test del Hola Mundo")
    })


})//cierre de describe