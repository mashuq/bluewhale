# Building first node
sudo docker build -t node1node node1node/

# Running first node on port 3000
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

#Run from any machine
sudo docker run -p 8001:8080 mashuqrahman/repository:node1node

