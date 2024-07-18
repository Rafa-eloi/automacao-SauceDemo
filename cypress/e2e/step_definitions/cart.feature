Feature: Cart

Background: Acesso a página de login
Given Acesso a tela de login
When Preencho corretamente o usuário
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a tela de produtos

Scenario: Adicionar produtos ao carrinho e vizualizar
When Cliclo em adicionar produtos ao carrinho
When Clico para ir para o carrinho
Then Vizualizo os produtos no carrinho

Scenario: Remover produto do carrinho
When Cliclo em adicionar produtos ao carrinho
When Clico para ir para o carrinho
When Clico para remover os produtos do carrinho
Then Vizualizo que os produtos foram removidos do carrinho