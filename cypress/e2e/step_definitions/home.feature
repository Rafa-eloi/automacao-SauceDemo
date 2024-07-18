Feature: Home

Background: Acesso a página de login
Given Acesso a tela de login
When Preencho corretamente o usuário
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a tela de produtos

Scenario: Visualizar lista de produtos após login
Then Visualizo os produtos da home

Scenario: Visualizar itens do menu
When Cliclo no menu sandwich
Then Visualizo todos os links