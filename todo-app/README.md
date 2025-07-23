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

## Deploying to Kubernetes with k3d

1. Build the Docker image:
   ```bash
   docker build -t todo-app:latest .
   ```
2. Import the image into your k3d cluster:
   ```bash
   k3d image import todo-app:latest
   ```
3. Apply the Kubernetes manifest:
   ```bash
   kubectl apply -f manifests/deployment.yaml
   ```
4. Check deployment and logs:
   ```bash
   kubectl get deployments
   kubectl get pods -l app=todo-app
   kubectl logs -l app=todo-app -f
   ```
5. Port-forward to access the app in your browser:
   ```bash
   kubectl port-forward service/todo-app-service 3000:3000
   # Then visit http://localhost:3000
   ``` 