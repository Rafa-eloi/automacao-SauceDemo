pipeline {
    agent any

    tools { nodejs 'Node16' }

    stages {
        stage('Bulding') {
            steps {
                echo "Bulding the application"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "npm i"
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh "npx cypress run"
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
