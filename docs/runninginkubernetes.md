# Running kubernetes

### Either Intall and start kubernetes cluster using Kubeadm 

`wget https://github.com/kubernetes-sigs/kubeadm-dind-cluster/releases/download/v0.1.0/dind-cluster-v1.13.sh`

`chmod +x dind-cluster-v1.13.sh`

`sudo ./dind-cluster-v1.13.sh up`

### Or Intall and start kubernetes cluster using minikube 
`curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && sudo install minikube-linux-amd64 /usr/local/bin/minikube`

`sudo minikube start`

### View Nodes
`sudo kubectl get nodes`

### Deploy node1node
`sudo kubectl run node1node --image=mashuqrahman/repository:node1node --port=8080`

### View Deployments
`sudo kubectl get deployments`

### Run proxy in another terminal
`sudo kubectl proxy`

### Get the pod name
`sudo kubectl get pods`

### Access the application frontend
`curl http://localhost:8001/api/v1/namespaces/default/pods/<Pod Name>/proxy/`

### Access the appication runtime
`sudo kubectl exec <Pod Name> env`

`sudo kubectl -ti exec <Pod Name> bash`

`curl localhost:8080`

### View existing services
`sudo kubectl get services`

### Create a new service and expose it to external traffic
`sudo kubectl expose deployment/node1node --type="NodePort" --port 8080`

### View newly created service
`sudo kubectl get services`

### View service details
`sudo kubectl describe services/node1node`

### Access application
`curl http://<minkube or kubeadm-dind host>:<service port>`

### Access application if using minikube
`sudo minikube service node1node`

### Scale deployment to 4 pods
`sudo kubectl scale deployments/node1node --replicas=4`

### View replicated pods
`sudo kubectl get pods`