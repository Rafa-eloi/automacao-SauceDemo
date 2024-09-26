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
                bat "npm i"
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat "npm run cypress:run"
            }
        }

        stage('Reports') {
            steps {
                bat "node cucumber-html-report.js"
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
