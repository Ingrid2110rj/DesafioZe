// <reference types="cypress"> />


import CarrinhoZe from '../support/Desafio Zé/Carrinho'
const el = require('../support/Desafio Zé/elementos').ELEMENTOS
describe('Desafio Zé', () => {

    beforeEach(() => {
      CarrinhoZe.GravarNomePreco();
    })
    it( "Validar nome e preço do produto no carrinho", function () {
        CarrinhoZe.acessarLogin();
        CarrinhoZe.PreencherBusca();
        CarrinhoZe.SelecionarProduto();
        CarrinhoZe.Adicionaproduto();
        CarrinhoZe.AdicionarCarrinho();
        cy.get(el.NOMECARRINHO).should('contain', this.Produto);
        cy.get(el.PRECOCARRINHO).should('contain', this.Preco);
        
        
    })
})