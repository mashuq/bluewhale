# Building first node
sudo docker build -t node1 node1node/

# Running first node on port 3000
sudo docker run -p 4000:3000 -d node1

#Testing first node
curl -i localhost:4000

#Viewing first node run details
sudo docker ps

#Viewing first node log
sudo docker logs <container id>

#Stopping Docker Run
sudo docker stop <container id>

#Accessing the Running Instance
docker exec -it <container id> /bin/bash