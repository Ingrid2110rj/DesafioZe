![Logo](https://github.com/Ingrid2110rj/DesafioZe/blob/main/logocorreta.jpeg)

# Desafio Zé Delivery

### Etapas da Automação-Cypress:

##### :triangular_flag_on_post:CADASTRO

>*Nesta etapa foram testados os requisitos de cadastro de um novo usúario (Partição de equivalencia e Análise de valor Limite) e foi
criada uma nova conta*

---
#### Requisitos:

- CPF Válido
- Maioridade 
- Precisa ter 8 caracteres ou mais
- Precisa ter 1 letra minúscula ou mais 
- Precisa ter 1 número ou mais 
- Precisa ter 1 caracter especial %$#@ ou mais 


##### :triangular_flag_on_post: LOGIN

>*Nesta etapa foi testada a funcionalidade de login.*
---
 - Tentar logar com a senha errada
 - Tentar logar com o e-mail errado
 - Tentar logar com os dados válidos

##### :triangular_flag_on_post: BUSCA

>*Nesta etapa realizamos a busca por um produto e validamos o nome no resultado  da busca.*
---
- Buscar produto e validar o nome dele

##### :triangular_flag_on_post: CARRINHO

>*Nesta etapa adicionamos um produto ao carrinho e validamos nome e valor (devem ser iguais à tela do produto).*
---
- Validar preço e nome do produto

##### :triangular_flag_on_post: VALIDAR LINKS DAS REDES SOCIAIS

>*Nesta etapa validamos se os links das redes sociais direcionam corretamente as respectivas páginas.*
---
- Acesso ao Facebook
- Acesso ao Twitter
- Acesso ao Instagram


## TESTE API CORREIOS 

### Etapas da Automação - Postman e Cypress:

##### :triangular_flag_on_post:GET

>*Nesta etapa testamos a API dos Correios.*
---

- Busca por CEP válido
- Busca por CEP inexistente
- Busca sem Informar CEP
- Busca com CEP em formato inválido

