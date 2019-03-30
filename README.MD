## For First Node : Nodejs Application

# Building first node
sudo docker build -t node1node node1node/

# Running first node on port 8001
sudo docker run -p 8001:8080 -d node1node

#Testing first node
curl -i localhost:8001

#Viewing first node run details
sudo docker ps

#Viewing first node log
sudo docker logs <container id>

#Stopping Docker Run
sudo docker stop <container id>

#Accessing the Running Instance
docker exec -it <container id> /bin/bash

#Login to docker
sudo docker login

#Tag the image
sudo docker tag node1node mashuqrahman/repository:node1node

#Push the image
sudo docker push mashuqrahman/repository:node1node

#Run from any machine
sudo docker run -p 8001:8080 mashuqrahman/repository:node1node



## For Second Node : Spring Boot Application

# Building second node
sudo docker build -t node2spring node2spring/

# Running second node on port 8002
sudo docker run -p 8002:8080 -d node2spring

#Testing second node
curl -i localhost:8002

#Viewing second node run details
sudo docker ps

#Viewing second node log
sudo docker logs <container id>

#Stopping Docker Run
sudo docker stop <container id>

#Accessing the Running Instance
docker exec -it <container id> /bin/bash

#Login to docker
sudo docker login

#Tag the image
sudo docker tag node2spring mashuqrahman/repository:node2spring

#Push the image
sudo docker push mashuqrahman/repository:node2spring

#Run from any machine
sudo docker run -p 8002:8080 mashuqrahman/repository:node2spring


## To run the docker swarm

#Login to docker hub
sudo docker login

#Init the swarm
sudo docker swarm init

#Deploy the stack
sudo docker stack deploy -c docker-compose.yml bluewhale

#View stack status
sudo docker service ls

#View detailed stack status
sudo docker service ps bluewhale_web --no-trunc

#Leave the swarm
sudo docker swarm leave --force
