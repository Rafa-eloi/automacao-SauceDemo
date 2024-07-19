Feature: Checkout

Background: Acesso a página de login
Given Acesso a tela de login
When Preencho corretamente o usuário
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a tela de produtos


Scenario: Realizar fluxo de compra corretamente e finalizar com sucesso
When Cliclo em adicionar produtos ao carrinho
When Clico para ir para o carrinho
Then Vizualizo os produtos no carrinho
When Cliclo em Checkout
When Preencho corretamente o nome
When Preencho corretamente o sobrenome
When Preencho corretamente o cep
When Cliclo em continuar
When Vizualizo os produtos na tela finalizar
When Clico em finish
Then Vizualizo a tela de sucesso

Scenario: Negar realizar fluxo de compra com dados vazios (nome)
When Cliclo em adicionar produtos ao carrinho
When Clico para ir para o carrinho
Then Vizualizo os produtos no carrinho
When Cliclo em Checkout
When Preencho corretamente o sobrenome
When Preencho corretamente o cep
When Cliclo em continuar
Then Vizualizo a mensagem de First Name is required

Scenario: Negar realizar fluxo de compra com dados vazios (sobrenome)
When Cliclo em adicionar produtos ao carrinho
When Clico para ir para o carrinho
Then Vizualizo os produtos no carrinho
When Cliclo em Checkout
When Preencho corretamente o nome
When Preencho corretamente o cep
When Cliclo em continuar
Then Vizualizo a mensagem de Last Name is required

Scenario: Negar realizar fluxo de compra com dados vazios (cep)
When Cliclo em adicionar produtos ao carrinho
When Clico para ir para o carrinho
Then Vizualizo os produtos no carrinho
When Cliclo em Checkout
When Preencho corretamente o nome
When Preencho corretamente o sobrenome
When Cliclo em continuar
Then Vizualizo a mensagem de Postal Code is required