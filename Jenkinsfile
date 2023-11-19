pipeline {
    agent {
        docker {
            image 'cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1'
        }
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage("Init dependencies") {
            steps {
                sh 'npm i'
            }
        }

        stage("Run tests") {
            steps {
                sh 'npm run cy:run1'
            }
        }
    }

    post {
        always {
            sh "npm run cy:run2"
        }
        success {
            script {
                cleanWs()
            }
        }
    }
}
