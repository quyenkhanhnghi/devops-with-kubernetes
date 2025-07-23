# Log Output Application

Add an endpoint to request the current status (timestamp and the random string) and an Ingress so that you can access it with a browser.

## Quick Start

### Prerequisites

- Node.js (v20 or later)
- Docker
- k3d cluster
- kubectl configured to connect to your cluster

### Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   node index.js
   ```

### Run with Docker

1. Build the Docker image:
   ```bash
   docker build -t log-output-app:latest .
   ```
2. Run the container:
   ```bash
   docker run --rm log-output-app:latest
   ```

### Deploy to Kubernetes (k3d)

1. Build and import the image into your k3d cluster:
   ```bash
   docker build -t log-output-app:latest .
   k3d image import log-output-app:latest -c k3s-default
   ```
2. Apply the Kubernetes manifest:
   ```bash
   kubectl apply -f manifests/deployment.yaml
   ```
3. View the logs:
   ```bash
   kubectl get deployments
   kubectl get pods -l app=log-output-app
   kubectl logs -l app=log-output-app -f
   ```

