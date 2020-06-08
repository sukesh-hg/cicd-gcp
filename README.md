# CI-CD ON GCP

Google Cloud Platform offers a suite of tools from Cloud Source Repositories(GitHub equivalent) to Cloud Build and Cloud Run, all of which can be used to setup an automated CI-CD pipeline.

Cloud Build works similar to Jenkins as in it can be used to package your code into a docker image and deploy. Cloud Run is a No-Ops service to run code in containers and autoscale depending on the traffic it serves.

This repository also contains a sample nodejs app with the Dockerfile. cloudbuild.yaml is used as the configuration for Cloud build. 

Pre-requisites: Access to Google Cloud platform with a valid billing id. 
                Cloud Build and Cloud Run APIs need to be enabled.
                The default Cloud Build Service Account needs to have 'Cloud Run Admin' role granted to be able to deploy this app.
