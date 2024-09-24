pipeline {
    agent any

    tools { nodejs 'Node16' }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Running production backtests') {
            steps {
                sh 'npm run prod:regress'
            }
        }
    }
    post {
        always {
            junit 'results/*.xml'
        }
    }
}
