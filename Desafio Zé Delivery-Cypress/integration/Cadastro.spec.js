// <reference types="cypress"> />

import CadastroZe from '../support/Desafio Zé/Cadastro'

describe('Desafio Zé', () => {


    it(' Tentar criar senha sem ter 8 caracteres ou mais', () => { 
        CadastroZe.CriarSenhasem8Caracteres();

    }); 
    it('Tentar criar senha sem ter 1 letra minúscula ou mais', () => { 
        CadastroZe.CriarSenhasemLetraMinuscula();

      });
   
        it('Tentar criar senha sem ter 1 número ou mais', () => { 
           CadastroZe.CriarSenhasemNumero()
       
        }); 
      
      it('Tentar criar senha sem ter 1 caracter especial %$#@ ou mais', () => { 
         CadastroZe.CriarSenhasemCaracterEspecial();

        });

    it('Tentar criar cadastro sendo < 18 anos ', () => {
        CadastroZe.CriarCadastroMenorIdade();

    });

    it('Tentar criar cadastro com CPF inválido ', () => {

        CadastroZe.CriarCadastroCPFInválido();
    });


       it('Criar login com dados válidos', () => {

       CadastroZe.CriarCadastroDadosValidos();

    });
     
});