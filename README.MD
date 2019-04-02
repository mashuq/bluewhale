# For First Node : Nodejs Application

### Building first node
> `sudo docker build -t node1node node1node/`

### Running first node on port 8001
> `sudo docker run -p 8001:8080 -d node1node`

### Testing first node
> `curl -i localhost:8001`

### Viewing first node run details
> `sudo docker ps`

### Viewing first node log
> `sudo docker logs <container id>`

### Stopping Docker Run
> `sudo docker stop <container id>`

### Accessing the Running Instance
> `docker exec -it <container id> /bin/bash`

### Login to docker
> `sudo docker login`

### Tag the image
> `sudo docker tag node1node mashuqrahman/repository:node1node`

### Push the image
> `sudo docker push mashuqrahman/repository:node1node`

### Run from any machine
> `sudo docker run -p 8001:8080 mashuqrahman/repository:node1node`

# For Second Node : Spring Boot Application

### Building second node
> `sudo docker build -t node2spring node2spring/`

### Running second node on port 8002
> `sudo docker run -p 8002:8080 -d node2spring`

### Testing second node
> `curl -i localhost:8002`

### Viewing second node run details
> `sudo docker ps`

### Viewing second node log
> `sudo docker logs <container id>`

### Stopping Docker Run
> `sudo docker stop <container id>`

### Accessing the Running Instance
> `docker exec -it <container id> /bin/bash`

### Login to docker
> `sudo docker login`

### Tag the image
> `sudo docker tag node2spring mashuqrahman/repository:node2spring`

### Push the image
> `sudo docker push mashuqrahman/repository:node2spring`

### Run from any machine
> `sudo docker run -p 8002:8080 mashuqrahman/repository:node2spring`

# To run the docker swarm in the single host machine

### Login to docker hub
> `sudo docker login`

### Init the swarm
> `sudo docker swarm init`

### Deploy the stack
> `sudo docker stack deploy -c docker-compose.yml bluewhale`

### View stack status
> `sudo docker service ls`

### View detailed stack status
> `sudo docker service ps bluewhale_web --no-trunc`

### Leave the swarm
> `sudo docker swarm leave --force`

# To run the docker swarm in a network of machines

### Create first virtual machine 
> `docker-machine create --driver virtualbox firstmachine`

### Create second virtual machine
> `docker-machine create --driver virtualbox secondmachine`

### View the machines
> `docker-machine ls`

### View first machine info
> `docker-machine env firstmachine`

### Use first machine
> `eval $(docker-machine env firstmachine)`

### Start docker swarm and make this machine the manager
> `docker swarm init --advertise-addr=192.168.99.100`

### Use second machine
> `eval $(docker-machine env secondmachine)`

### Join the docker swarm with token as a worker
> `docker swarm join --token <SWARM TOKEN> 192.168.99.100:2377`

### Deploy the stack
> `docker stack deploy -c docker-compose.yml bluewhale`

### View the stack status
> `docker stack ps bluewhale`


# Running kubernetes

### Either Intall and start kubernetes cluster using Kubeadm 

> `wget https://github.com/kubernetes-sigs/kubeadm-dind-cluster/releases/download/v0.1.0/dind-cluster-v1.13.sh`

> `chmod +x dind-cluster-v1.13.sh`

> `sudo ./dind-cluster-v1.13.sh up`

### Or Intall and start kubernetes cluster using minikube 
> `curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && sudo install minikube-linux-amd64 /usr/local/bin/minikube`

> `minikube start`

### View Nodes
> `sudo kubectl get nodes`

### Deploy node1node
> `sudo kubectl run node1node --image=mashuqrahman/repository:node1node --port=8080`

### View Deployments
> `sudo kubectl get deployments`

### Run proxy in another terminal
> `sudo kubectl proxy`

### Get the pod name
> `sudo kubectl get pods`

### Access the application frontend
> `curl http://localhost:8001/api/v1/namespaces/default/pods/<Pod Name>/proxy/`

### Access the appication runtime
> `sudo kubectl exec <Pod Name> env`

> `sudo kubectl -ti exec <Pod Name> bash`

> `curl localhost:8080`

