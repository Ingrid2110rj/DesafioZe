const el = require('./elementos').ELEMENTOS


class CadastroZe {

    CriarSenhasem8Caracteres(){
        cy.visit(el.url);
        cy.get(el.BOTAOCOKIESS).click()
        cy.get(el.BOTAOENTRAR).click()
        cy.get(el.BOTAOCRIARCONTA).click()
        cy.get(el.NOME).type('Ingrid Ferreira')
        cy.get(el.EMAIL).type('daviferreira14ano@gmail.com')
        cy.get(el.SENHA).type('penie1@')
        cy.get(el.CPF).type('1077798276')
        cy.get(el.TELEFONE).type('2197562544',{force: true})
        cy.get(el.IDADE).type('18')
        cy.get(el.TERMO).click()
        cy.get(el.ERROSENHA).should('be.visible')
    
    }
    
    CriarSenhasemLetraMinuscula(){
        cy.visit(el.url);
        cy.get(el.BOTAOCOKIESS).click()
        cy.get(el.BOTAOENTRAR).click()
        cy.get(el.BOTAOCRIARCONTA).click()
        cy.get(el.NOME).type('Ingrid Ferreira')
        cy.get(el.EMAIL).type('daviferreira14no@gmail.com')
        cy.get(el.SENHA).type('PENIEL13@')
        cy.get(el.CPF).type('1077798206')
        cy.get(el.TELEFONE).type('21975622544',{force: true})
        cy.get(el.IDADE).type('18')
        cy.get(el.TERMO).click()
        cy.get(el.ERROSENHA).should('be.visible')
    
    
    
    }
    CriarSenhasemNumero(){
        cy.visit(el.url);
        cy.get(el.BOTAOCOKIESS).click()
        cy.get(el.BOTAOENTRAR).click()
        cy.get(el.BOTAOCRIARCONTA).click()
        cy.get(el.NOME).type('Ingrid Ferreira')
        cy.get(el.EMAIL).type('daviferreir4ano@gmail.com')
        cy.get(el.SENHA).type('peniellll@')
        cy.get(el.CPF).type('1077798206')
        cy.get(el.TELEFONE).type('2197622544',{force: true})
        cy.get(el.IDADE).type('18')
        cy.get(el.TERMO).click()
        cy.get(el.ERROSENHA).should('be.visible')
    
    }
        CriarSenhasemCaracterEspecial(){
    
            cy.visit(el.url);
            cy.get(el.BOTAOCOKIESS).click()
            cy.get(el.BOTAOENTRAR).click()
            cy.get(el.BOTAOCRIARCONTA).click()
            cy.get(el.NOME).type('Ingrid Ferreira')
            cy.get(el.EMAIL).type('daviferreira14no@gmail.com')
            cy.get(el.SENHA).type('penie1234')
            cy.get(el.CPF).type('1077798706')
            cy.get(el.TELEFONE).type('2197622544',{force: true})
            cy.get(el.IDADE).type('18')
            cy.get(el.TERMO).click()
            cy.get(el.ERROSENHA).should('be.visible')
    
    
        }
        CriarCadastroMenorIdade(){
    
            cy.visit(el.url);
            cy.get(el.BOTAOCOKIESS).click()
            cy.get(el.BOTAOENTRAR).click()
            cy.get(el.BOTAOCRIARCONTA).click()
            cy.get(el.NOME).type('Ingrid Ferreira')
            cy.get(el.EMAIL).type('daviferrira14ano@gmail.com')
            cy.get(el.SENHA).type('peniel134')
            cy.get(el.CPF).type('1077798706')
            cy.get(el.TELEFONE).type('2197562544',{force: true})
            cy.get(el.IDADE).type('17')
            cy.get(el.TERMO).click()
            cy.get(el.ERROIDADE).should('be.visible')
    
    
        }
        CriarCadastroCPFInválido(){
    
            cy.visit(el.url);
            cy.get(el.BOTAOCOKIESS).click()
            cy.get(el.BOTAOENTRAR).click()
            cy.get(el.BOTAOCRIARCONTA).click()
            cy.get(el.NOME).type('Ingrid Ferreira')
            cy.get(el.EMAIL).type('daviferrera4ano@gmail.com')
            cy.get(el.SENHA).type('penie134')
            cy.get(el.CPF).type('1077798706')
            cy.get(el.TELEFONE).type('21975622544',{force: true})
            cy.get(el.IDADE).type('18')
            cy.get(el.TERMO).click()
            cy.get(el.ERROCPF).should('be.visible')
        }
      
        CriarCadastroDadosValidos(){
    
            cy.visit(el.url);
            cy.get(el.BOTAOCOKIESS).click()
            cy.get(el.BOTAOENTRAR).click()
            cy.get(el.BOTAOCRIARCONTA).click()
            cy.get(el.NOME).type('Ingrid Ferreira')
            cy.get(el.EMAIL).type('daviferreira1anooiipo@gmail.com')
            cy.get(el.SENHA).type('Penel123@')
            cy.get(el.CPF).type('1077782706')
            cy.get(el.TELEFONE).type('21975622544',{force: true})
            cy.get(el.IDADE).type('18')
            cy.get(el.TERMO).click()
            cy.get(el.HOME).click()
            cy.get(el.HOME).should('be.visible')
    


        }
    }


    export default new CadastroZe();
