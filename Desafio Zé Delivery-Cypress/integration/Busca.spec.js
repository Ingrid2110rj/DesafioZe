// <reference types="cypress"> />

import BuscaZe from '../support/Desafio Zé/Busca'
const el = require('../support/Desafio Zé/elementos').ELEMENTOS

describe('Desafio Zé', () => {

    beforeEach(() => {
        BuscaZe.GravarNomePreco()
               
    })
    it( "Validar nome e preço do produto no carrinho", function () {

        BuscaZe.acessarLogin();
        BuscaZe.PreencherBusca();
        BuscaZe.SelecionarProduto();
        BuscaZe.Adicionaproduto();
        cy.get(el.NOMEPRODUTO).should('contain', this.Produto);
        cy.get(el.PRECO).should('contain', this.Preco);
        
    })
    })