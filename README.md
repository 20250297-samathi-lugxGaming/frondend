<<<<<<< HEAD
# lugx-frontend
Static web frontend for Lugx Gaming. Built with HTML, CSS, and JavaScript, served via NGINX in a container. Deployed on Kubernetes with Ingress as a single public endpoint. Integrates web analytics tracking for ClickHouse.

## Tech Stack
- HTML, CSS, JavaScript
- NGINX
- Docker
- Kubernetes (Minikube & GKE)

## Docker image build and push to docker hub
- docker build -t samathikisalka/lugx-frontend:latest .
- docker push samathikisalka/lugx-frontend:latest .

## Kubernetes Deployment

- kubectl apply -f k8s/frontend-deployment.yaml
- kubectl apply -f k8s/frontend-service.yaml
- kubectl apply -f k8s/lugx-ingress.yaml

Update /etc/hosts with your Minikube IP and domain

<MINIKUBE_IP> lugx.local

##CI/CD Pipeline

This repo uses GitHub Actions to

Build the Docker image
Push to Docker Hub (or GCR)
Deploy to Minikube or GKE using kubectl

  
=======
# lugx-analytics-service
Analytics microservice for capturing and processing website user interaction data. Integrates with ClickHouse to store web analytics (page views, clicks, session time, etc.). Exposes APIs for collecting analytics data from the frontend. Containerized and deployed on Kubernetes.
### build image locally and push 

- docker build -t samathikisalka/analytics-service:latest .
- docker push samathikisalka/analytics-service:latest

#### Deploy Analytics Service

- kubectl apply -f k8s/analytics-deployment.yaml
- kubectl apply -f k8s/analytics-service.yaml

  #### clickHouse
  
- kubectl apply -f k8s/clickhouse-deployment.yaml
- kubectl apply -f k8s/clickhouse-service.yaml
- kubectl port-forward svc/clickhouse 8123:8123

  http://localhost:8123/



>>>>>>> 5e28dbe (Add frontend project files)
