const el = require('./elementos').ELEMENTOS

class BuscaZe {

    GravarNomePreco(){

        cy.visit(el.url);
        cy.get(el.BOTAOCOKIESS).click()
        cy.get(el.BOTAOENTRAR).click()
        cy.get(el.ENTRAREMAIL).type('daviferreira6ano@gmail.com')
        cy.get(el.ENTRARSENHA).type('Peniel123@')
        cy.get(el.BOTAOLOGAR).click()
        cy.get(el.CONFIRMARIDADE,{timeout: 10000}).click({force: true})
        cy.get(el.PESQUISAR).type('Vinho Tinto Malbec Cava Negra 750ml')
        cy.get(el.CONFIRMARPRODUTO).click()
        cy.get(el.SALVARNOMEPRODUTO).invoke('text').as('Produto');
        cy.get(el.SALVARPRECO).invoke('text').as('Preco');
    }


        acessarLogin(){
            cy.visit(el.url);
         }
         PreencherBusca(){
            cy.get(el.PESQUISAR).type('Vinho Tinto Malbec Cava Negra 750ml')
        }
        
        SelecionarProduto(){
            cy.get(el.CONFIRMARPRODUTO).click()
        
        }
        Adicionaproduto(){
            cy.get(el.ADICIONARPRODUTO).click({force: true})

        }
    }


    export default new BuscaZe();