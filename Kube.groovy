#!/usr/bin/env groovy

def checkForRunningPod() {
	String token = new File('/var/run/secrets/kubernetes.io/serviceaccount/token').text

    String kubeCommand = 'curl --insecure --header \"Authorization: Bearer ' +
    token + '\" https://kubernetes.default.skydns.local:6443/api/v1/namespaces/cloud-optimization-qa/pods'
    
    def kubeResponse = sh script: kubeCommand, returnStdout: true
    println("kubeCommand is:  " + kubeCommand)
    println("kubeResponse is:  " + kubeResponse)
}