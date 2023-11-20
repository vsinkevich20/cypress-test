pipeline{

    agent {

        docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}

    }

    environment {

        HOME = "${env.WORKSPACE}"

    }

    options {

        ansiColor('xterm')

    }

    stages {

        stage ("Init dependensies") {

            steps {

                sh 'npm i'

            }

        }

        stage ("Run tests") {

            parallel {

                stage ("Run 1") {

                    steps {

                        sh 'npm run cy:run1'

                    }

                }

                stage ("Run 2") {

                    steps {

						sh 'sleep 5'

                        sh 'npm run cy:run2'

                    }

                }

            }

        }

    }

    post {

        always {

            cleanWs()

        }

    }

}
