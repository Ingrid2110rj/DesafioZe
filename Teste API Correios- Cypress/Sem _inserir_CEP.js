describe('API Correios', () => {
    it('Buscar sem inserir Cep', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.postmon.com.br/v1/cep/',
        failOnStatusCode: false
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response).to.have.property("status", 404)
        
       
      })
    })
  })