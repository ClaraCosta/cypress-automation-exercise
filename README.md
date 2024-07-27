<h1>Cypress and JS - Automation Exercise Site</h1>

<div>
  <a href=""><img src="https://asset.brandfetch.io/idIq_kF0rb/idGSuvAIy3.png" height="100em" target="blank"></a>
  <a href=""><img src="https://tipscode.com.br/uploads/2020/01/js.png" height="100em" target="blank"></a>
<div>

#### Respositório destinado a apresentação de um projeto pessoal, utilizando Cypress e Javascript.

---

<h3>Configurações gerais</h3> 

#### Definindo o arquivo (`cypress.config.js`)
- Foi definida a baseUrl com o site Automation Exercise, passando a ser "chamado" com (`Cypress.config('baseUrl')`);
- Adicionalmente, foi inserido o `experimentalRunAllSpecs`, que permite a execução de todas as specs aleatoriamente e automaticamente;
~~~javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    experimentalRunAllSpecs: true,
    }

 }) 
~~~
---

<h3>Testes e2e</h3> 

#### Arquivo (`visit_site.cy.js`)
- Validação básica para identificar a disponibilidade do site;

#### Arquivo (`login.cy.js`)
- Utiliza dados pré-definidos para efetuar login no site

#### Arquivo (`menu_validation.cy.js`)
- Percorre todos os menus do site;
- Além de percorrer, acessa cada um deles, e valida asserções para confirmar seu funcionamento;

#### Arquivo (`access_cart.cy.js`)
- Feature responsável por veririficar se o menu cart é funcional

#### Arquivo (`complete_buy.cy.js`)
- Feature que valida desde o login, até a efetivação da compra de dois itens;
    - Efetua login;
    - Insere dois produtos no carrinho de compras;
    - Escreve uma mensagem de Review Order;
    - Insere dados do cartão;
    - Valida se de fato a compra foi efetivada;

---


