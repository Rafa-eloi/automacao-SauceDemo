pipeline {
    agent any

    tools { nodejs 'Node16' }

    stages {
        stage('Install Dependencies') {
            steps {
                bat "npm i"

                /*
                script {
                    sh 'npm i'
                }
                */
                
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat "npx cypress run"

                /*
                script {
                    // Executa os testes no modo headless
                    sh 'npx cypress run'
                }
                */
                
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
