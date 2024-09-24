pipeline {
    agent any

    tools { nodejs 'Node16' }

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Escolha o navegador para execução dos scripts")
    }

    stages {
        stage('Bulding') {
            steps {
                echo "Bulding the application"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "npm i"
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat "npx cypress run --browser ${BROWSER}"
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }

    post {
        always {
            // Publica resultados (se houver integração de relatórios)
            archiveArtifacts artifacts: '**/cypress/screenshots/*', allowEmptyArchive: true
            archiveArtifacts artifacts: '**/cypress/videos/*', allowEmptyArchive: true
        }
        failure {
            // Adiciona relatórios em caso de falha
            echo 'Os testes falharam.'
        }
    }
}
