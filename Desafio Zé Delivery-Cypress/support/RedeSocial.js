const el = require('./elementos').ELEMENTOS

class RedeSocialZe {


    ValidandoFacebook(){

 
        cy.visit(el.url);
        cy.get(el.BOTAOCOKIESS).click()
        cy.get(el.BOTAOENTRAR).click()
        cy.get(el.ENTRAREMAIL).type('daviferreira6ano@gmail.com')
        cy.get(el.ENTRARSENHA).type('Peniel123@')
        cy.get(el.BOTAOLOGAR).click()
        cy.get(el.CONFIRMARIDADE,{ timeout: 10000 }).click({force: true})
     
     }
     ValidandoTwitter(){
     
         
         cy.visit(el.url);
         cy.get(el.BOTAOCOKIESS).click()
         cy.get(el.BOTAOENTRAR).click()
         cy.get(el.ENTRAREMAIL).type('daviferreira6ano@gmail.com')
         cy.get(el.ENTRARSENHA).type('Peniel123@')
         cy.get(el.BOTAOLOGAR).click()
         cy.get(el.CONFIRMARIDADE,{ timeout: 10000 }).click({force: true})
     
     
     }
     
     ValidandoInstagram(){
         
        
        cy.visit(el.url);
        cy.get(el.BOTAOCOKIESS).click()
        cy.get(el.BOTAOENTRAR).click()
        cy.get(el.ENTRAREMAIL).type('daviferreira6ano@gmail.com')
        cy.get(el.ENTRARSENHA).type('Peniel123@')
        cy.get(el.BOTAOLOGAR).click()
        cy.get(el.CONFIRMARIDADE,{ timeout: 10000 }).click({force: true})
     
     
     }
     



    }




    export default new RedeSocialZe();