<!-- TOC Alt + Insert -->
* [GCP commands](#gcp-commands)
    * [To run cloud postgreSQL](#to-run-cloud-postgresql)
    * [To get the ssl](#to-get-the-ssl)
<!-- TOC -->

# GCP commands
- gcloud auth login
- gcloud config set project <proj-name>
- gcloud sql instances describe <proj-name>

### To run cloud postgreSQL

- google cloud console -> SQL -> Cloud SQL Studio

### To get the ssl

- Connection -> security -> Download Server-certificate.pem, Client-Certificate.pem and client-key.pem





# Oreilly Commands

## Local:-
1. Change version in build.gradle. Check the latest version in Google - Artifact Registry
2. Build the project `./gradlew clean build`
3. Build to the GCP Artifact Registry - `./gradlew jib`
4. Build locally - `./gradlew jibDockerBuild`
5. Run to test Note, change the version according to the version updated - `docker run -p 8080:8080 us-central1-docker.pkg.dev/orly-gcp-us-dev-dig-sms-99/opc-hub/opc-hub-pol:$version`
- To test, run swagger in local - [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

## Pushing to docker from local:-
6. - `gcloud auth login`
7. - `gcloud auth configure-docker us-central1-docker.pkg.dev`
8. Push to Docker container - `docker push us-central1-docker.pkg.dev/orly-gcp-us-dev-dig-sms-99/opc-hub/opc-hub-pol:$version`

## Kubernetis:-
9.   - Open Google cloud SDK shell - `gcloud components install gke-gcloud-auth-plugin`
10. - `kubectl get node`
11. - Change version - `kubectl set image deployment/opc-hub-pol opc-hub-pol=us-central1-docker.pkg.dev/orly-gcp-us-dev-dig-sms-99/opc-hub/opc-hub-pol:$version`
12. Check in kubernetis cluster cloud