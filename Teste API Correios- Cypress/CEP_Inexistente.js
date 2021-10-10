describe('GET usuarios API Correios', () => {
    it('Buscar por um CEP Inexistente', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.postmon.com.br/v1/cep/0000000',
        failOnStatusCode: false
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response).to.have.property("status", 404)
        
      })
    })
  })