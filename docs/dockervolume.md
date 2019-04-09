### Create a new local volume
> `sudo docker volume create node_volume`
### View the volumes
> `sudo docker volume ls`
### VIew the local volume in detail
> `sudo docker volume inspect node_volume`
### Start a swarm if not already started
> `sudo docker swarm init --advertise-addr=10.0.0.110`
### Create a service mounting to the node
> `sudo docker service create --name node --publish target=8080,published=8080 --replicas=3 --mount source=node_volume,target=/usr/src/app/data/ mashuqrahman/repository:node1node`
### VIew the services
> `sudo docker service ps node`
### Test the services
> `curl -i http://10.0.0.110:8080`
### Stop the service
> `sudo docker service rm node`
### Remove the volume 
> `sudo docker volume rm node_volume`

