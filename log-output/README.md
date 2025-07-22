# Log Output Application

A timestamped log entries with a unique UUID every 5 seconds.

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
   docker build -t log-output:latest .
   ```
2. Run the container:
   ```bash
   docker run --rm log-output:latest
   ```

### Deploy to Kubernetes (k3d)

1. Build and import the image into your k3d cluster:
   ```bash
   docker build -t log-output:latest .
   k3d image import log-output:latest -c k3s-default
   ```
2. Apply the Kubernetes manifest:
   ```bash
   kubectl apply -f manifests/deployment.yaml
   ```
3. View the logs:
   ```bash
   kubectl get pods
   kubectl logs -l app=log-output -f
   ```

