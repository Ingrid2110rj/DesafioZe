// <reference types="cypress"> />

import Ze from '../support/Desafio Zé'

describe('Desafio Zé', () => {
   
it('Tentar logar com o e-mail errado ', () => {

  Ze.LogarEmailIncorreto();

});
it ('Tentar logar com a senha errada ', () => {

    Ze.LogarSenhaErrada();


});
it('Tentar logar com os dados válidos ', () => {
    
    Ze.LogarDadosValidos();
});
});