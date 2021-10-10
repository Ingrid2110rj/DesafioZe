// <reference types="cypress"> />

import RedeSocialZe from '../support/Desafio Zé/RedeSocial'

describe('Desafio Zé', function () {

    it('Handling new Browser Tab', function () {
        cy.visit('https://www.ze.delivery/');
        cy.url(). should ('include','ze')
    });    
    it('Validando link do facebook', function () {
                RedeSocialZe.ValidandoFacebook();
                cy.get('[href="https://www.facebook.com/zedeliverydebebidas"]').invoke('removeAttr','target').click()
                cy.get('.fb_logo').should('be.visible')
     
})
   it('Validando link do Twitter', function () {
     RedeSocialZe.ValidandoTwitter();
     cy.get('[href="https://twitter.com/ZeDelivery"]').invoke('removeAttr','target').click()
     cy.get('.r-1awozwy > .r-1cvl2hr').should('be.visible')


  
})
      it('Validando link do Instagram', function () {  
      RedeSocialZe.ValidandoInstagram();
     cy.get('[href="https://www.instagram.com/zedelivery/?hl=pt"]').invoke('removeAttr','target').click()
     cy.get('.NXVPg').should('be.visible')
     
    })
     
});