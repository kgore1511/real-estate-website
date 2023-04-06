pipeline {
    agent { docker { image 'node:14-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
    dir('real_estate') {
      sh "pwd"
        sh "npm install"
        sh "npm start"
    }
    sh "pwd"
} 
        }
    }
}
