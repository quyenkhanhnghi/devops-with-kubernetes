# Todo App (Node.js)

A simple web server for the Kubernetes course project. Prints the port on startup and responds to HTTP requests.

## Running locally

```bash
npm install
PORT=3000 npm start
```

## Running with Docker

```bash
docker build -t todo-app .
docker run -e PORT=3000 -p 3000:3000 todo-app
```

## Deploying to Kubernetes with k3d and Ingress

1. Build the Docker image:
   ```bash
   docker build -t todo-app:latest .
   ```
2. Import the image into your k3d cluster:
   ```bash
   k3d image import todo-app:latest
   ```
3. Apply the Kubernetes manifests:
   ```bash
   kubectl apply -f manifests/
   ```
4. Check deployment and logs:
   ```bash
   kubectl get deployments
   kubectl get pods -l app=todo-app
   kubectl logs -l app=todo-app -f
   ```
5. Access the app via Ingress:
   - If your k3d load balancer maps port 8081:80, open:
     ```
     http://localhost:8081/
     ```
   - If you mapped a different port (e.g., 8080:80), use that port in the URL.
   - The Service is exposed on port 8080 inside the cluster and forwards to the app on port 3000.

> **Note:** The Service is now `ClusterIP` and external access is provided via Ingress, not NodePort. The port you use in your browser depends on how you created your k3d cluster.