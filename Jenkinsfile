service = "end-to-end"
runBuildFlag = false
mavenVersion = ""
gitCommit = ""

pipeline {
    agent any
    triggers {
      //every x minutes
      cron('H/30 * * * *')
    }
    tools { maven 'maven' }
    stages {
        stage('QA End to End Test')  {
            environment {
                CO_TEST_EBTOKEN_CLOUD_CHECKR = credentials('cam-cloudcheckr-test-key-qa')
            }
            steps {
                script {

                    checkForRunningPod()

                    try {
                        configFileProvider([configFile(fileId: 'global-maven-settings', variable: 'MAVEN_SETTINGS')]) {
                            sh "mvn test -Dspring.profiles.active=qa -Dselenium-grid=kube"
                        }
                    } catch (exc) {
                        failureMessage("cloud-optimization-end-to-end-test", "End to end test failure")
                        throw (exc)
                    }
                    successMessage("cloud-optimization-end-to-end")
                }
            }
            post {
                always {
                    cucumber '**/*.json'
                }
            }
        }
    }
}



def successMessage(String environment){
    echo environment
}

def failureMessage(String environment, String msg){
    echo environment
    echo msg
}

def checkForRunningPod() {

    String token = new File('/var/run/secrets/kubernetes.io/serviceaccount/token').text

    String kubeCommand = 'curl --insecure --header \"Authorization: Bearer ' +
    token + '\" https://kubernetes.default.skydns.local:6443/api/v1/namespaces/cloud-optimization-qa/pods'
    
    def kubeResponse = sh script: kubeCommand, returnStdout: true
    println("kubeCommand is:  " + kubeCommand)
    println("kubeResponse is:  " + kubeResponse)

}