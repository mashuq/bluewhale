# Create Bind mount with name and use it
### Create the data directory
> `mkdir /tmp/data`
### Create the bind mount volume
> `sudo docker volume create --driver local --opt o=bind --opt type=none --opt device=/tmp/data/ node_bindmount`
### View the volumes
> `sudo docker volume ls`
### View the bind mount volume in details
> `sudo docker volume inspect node_bindmount`
### Start the swarm if not already started
> `sudo docker swarm init --advertise-addr=10.0.0.110`
### Run the services using the bind mount volume
> `sudo docker service create --name node --publish target=8080,published=8080 --replicas=3 --mount source=node_bindmount,target=/usr/src/app/data/ mashuqrahman/repository:node1node`
### View the services
> `sudo docker service ps node`
### Test the services
> `curl -i http://10.0.0.110:8080`
### View the change in data directory
> `ls /tmp/data/`

# Create bind mount on the fly 
### Run the node image with bind mount volume mounted
> `sudo docker run --name node --publish target=8080,published=8080 --mount type=bind,source=/tmp/data/,target=/usr/src/app/data/ mashuqrahman/repository:node1node`
### Test the services
> `curl -i http://10.0.0.110:8080`
### View the change in data directory
> `ls /tmp/data/`