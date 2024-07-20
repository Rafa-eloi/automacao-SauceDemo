# Automacao SauceDemo
Projeto de automação utilizando o cypress para seleção em QA.
Neste projeto foram construídos 15 cenários, sendo eles divididos em 4 funcionalidades do sistema.
- Login: 6 cenários;
- Home: 2 cenários;
- Cart: 2 cenários;
- Checkout: 5 cenários.

# Preparação do Ambiente
Para este projeto foram utilizados as seguintes tecnologias/ferramentas/bibliotecas e versões:
- Node.Js v16.13.1
- Cypress v13.3.1
- Faker-js v8.4.1
- Cucumber v4.3.1
- Visual Studio Code

# Instalações
Instalação do Node
- Baixar e instalar o nvm-setup
- Executar o comando: nvm install 16.13.1
- Para verificar se a versão correta está instalada, execute o comando: `node -v`


Instalação do Cypress
- Dentro do diretório do projeto, abrir o terminal e rodar o comando: `npm install cypress --save-dev`
- Para verificar se a instalação está correta, execute o cypress com o comando: `npx cypress open`


Instalação do faker-js
- Dentro do diretório do projeto, abrir o terminal e rodar o comando: `npm install --save-dev @faker-js/faker`


Instalação do Cucumber
- Dentro do diretório do projeto, abrir o terminal e rodar o comando: `npm install --save-dev cypress cypress-cucumber-preprocessor`


Instalação do Visual Studio Code
- Entrar na página oficial e seguir os passos de instalação padrão: https://code.visualstudio.com/


# Informações para executar a automação
- Clonar o repositório no diretório local desejado;
- Abrir o terminal dentro da raiz do projeto e executar o comando: `npm install` para que seja criada a pasta node_modules;
- Para iniciar o cypress, execute o comando: `npx cypress open`
- Com a tela do cypress aberta, clique para executar os testes E2E;
- Na tela seguinte escolha o navegador em que deseja rodar os testes e clique para dar o "Start"
