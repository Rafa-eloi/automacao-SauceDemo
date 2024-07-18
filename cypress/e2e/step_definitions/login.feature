Feature: Login

Background: Acesso a página de login
Given Acesso a tela de login

Scenario: Login válido
When Preencho corretamente o usuário
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a tela de produtos

Scenario: Realizar logout do usuário
When Preencho corretamente o usuário
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a tela de produtos
When Clico pra realizar logout
Then Visualizo a tela login

Scenario: Negar login de usuário bloqueado
When Preencho o campo com um usuário bloqueado
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a mensagem de erro

Scenario: Negar login com usuário não cadastrado
When Preencho o campo com um usuário inexistente
When Preencho o campo com um senha inexistente
When Clico em login
Then Visualizo a mensagem de erro

Scenario: Negar login com username vazio
When Preencho cooretamente a senha
When Clico em login
Then Visualizo a mensagem de Username is required

Scenario: Negar login com password vazio
When Preencho corretamente o usuário
When Clico em login
Then Visualizo a mensagem de Password is required