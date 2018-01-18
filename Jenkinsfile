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


def nullTrustManager = [
    checkClientTrusted: { chain, authType ->  },
    checkServerTrusted: { chain, authType ->  },
    getAcceptedIssuers: { null }
]

def nullHostnameVerifier = [
    verify: { hostname, session -> true }
]


def checkForRunningPod() {

    String token = new File('/var/run/secrets/kubernetes.io/serviceaccount/token').text
    def connection = new URL( "https://kubernetes.default.skydns.local:6443/api/v1/namespaces/cloud-optimization-qa/pods")
            .openConnection() as HttpURLConnection

	SSLContext sc = SSLContext.getInstance("SSL")
	sc.init(null, [nullTrustManager as X509TrustManager] as TrustManager[], null)
	connection.setDefaultSSLSocketFactory(sc.getSocketFactory())
	connection.setDefaultHostnameVerifier(nullHostnameVerifier as HostnameVerifier)

    connection.setRequestProperty( "Authorization", "Bearer " + token )
    println connection.responseCode + ": " + connection.inputStream.text
}