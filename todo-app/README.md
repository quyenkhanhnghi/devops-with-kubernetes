# Todo App (Node.js)

A simple web server for the Kubernetes course project. Prints the port on startup and responds to HTTP requests.

## Running locally

```bash
npm install
PORT=4000 npm start
```

## Running with Docker

```bash
docker build -t todo-app .
docker run -e PORT=4000 -p 4000:4000 todo-app
``` 