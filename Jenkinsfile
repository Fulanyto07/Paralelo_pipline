pipeline {
    agent any

    //tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/Fulanyto07/Paralelo_pipline.git', branch: 'master'
                        bat 'npm install --save-dev cypress@9.7.0 --save-dev cypress@9.7.0'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cbd0c6fd-ce1a-4beb-95ec-6e8d97df6e68  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/Fulanyto07/Paralelo_pipline.git', branch: 'master'
                        bat 'npm install --save-dev cypress@9.7.0 --save-dev cypress@9.7.0'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cbd0c6fd-ce1a-4beb-95ec-6e8d97df6e68  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/Fulanyto07/Paralelo_pipline.git', branch: 'master'
                        bat 'npm install --save-dev cypress@9.7.0 --save-dev cypress@9.7.0'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cbd0c6fd-ce1a-4beb-95ec-6e8d97df6e68  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/Fulanyto07/Paralelo_pipline.git', branch: 'master'
                        bat 'npm install --save-dev cypress@9.7.0 --save-dev cypress@9.7.0'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key cbd0c6fd-ce1a-4beb-95ec-6e8d97df6e68  --parallel'
                    
                    }
                }
   
                  
            }

             
        }

    }
            
}