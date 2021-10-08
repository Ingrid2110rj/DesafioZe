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
        cy.get(el.CPF).type('10777982706')
        cy.get(el.TELEFONE).type('21975622544',{force: true})
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
        cy.get(el.EMAIL).type('daviferreira14ano@gmail.com')
        cy.get(el.SENHA).type('PENIEL123@')
        cy.get(el.CPF).type('10777982706')
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
        cy.get(el.EMAIL).type('daviferreira14ano@gmail.com')
        cy.get(el.SENHA).type('peniellll@')
        cy.get(el.CPF).type('10777982706')
        cy.get(el.TELEFONE).type('21975622544',{force: true})
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
            cy.get(el.EMAIL).type('daviferreira14ano@gmail.com')
            cy.get(el.SENHA).type('peniel1234')
            cy.get(el.CPF).type('10777982706')
            cy.get(el.TELEFONE).type('21975622544',{force: true})
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
            cy.get(el.EMAIL).type('daviferreira14ano@gmail.com')
            cy.get(el.SENHA).type('peniel1234')
            cy.get(el.CPF).type('10777982706')
            cy.get(el.TELEFONE).type('21975622544',{force: true})
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
            cy.get(el.EMAIL).type('daviferreira14ano@gmail.com')
            cy.get(el.SENHA).type('peniel1234')
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
            cy.get(el.EMAIL).type('daviferreira11anooiipo@gmail.com')
            cy.get(el.SENHA).type('Peniel123@')
            cy.get(el.CPF).type('10777982706')
            cy.get(el.TELEFONE).type('21975622544',{force: true})
            cy.get(el.IDADE).type('18')
            cy.get(el.TERMO).click()
            cy.get(el.HOME).click()
            cy.get(el.HOME).should('be.visible')
    


        }
    }


    export default new CadastroZe();