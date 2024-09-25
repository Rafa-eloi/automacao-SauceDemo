pipeline {
    agent {
        docker {
            image 'cypress/base:13.13.1' 
            args '-p 3000:3000' 
        }
    }
    
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
                sh "npm run cy:verify"
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh "npm run ci:cy-run"
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
