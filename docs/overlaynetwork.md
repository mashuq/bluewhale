### Create 3 virtual machines
> `docker-machine create --driver virtualbox one`

> `docker-machine create --driver virtualbox two`

> `docker-machine create --driver virtualbox three`
### View the virtual machines
> `docker-machine ls`
### Log into the first virtual machine
> `docker-machine env one`

> `eval $(docker-machine env one)`
### Start the swarm as manager
> `docker swarm init --advertise-addr=192.168.99.100`
### Login into the second virtual machine
> `docker-machine env two`

> `eval $(docker-machine env two)`
### Join the swarm as worker
> `docker swarm join --token SWMTKN-1-5tcj2jr5cz1xy70rbtupvgc39mpo4jw3xai0r4pb8em4yt3adj-brttdzk4q1ipfml36qoje5arq 192.168.99.100:2377`
### Login into the second virtual machine
> `docker-machine env three`

> `eval $(docker-machine env three)`
### Join the swarm as worker
> `docker swarm join --token SWMTKN-1-5tcj2jr5cz1xy70rbtupvgc39mpo4jw3xai0r4pb8em4yt3adj-brttdzk4q1ipfml36qoje5arq 192.168.99.100:2377`
### Login into the first machine
> `eval $(docker-machine env one)`
### View nodes
> `docker node ls`
### View networks
> `docker network ls`
### Create a new overlay network
> `docker network create -d overlay bluewhale_overlay`
### Inspect the overlay network
> `docker network inspect bluewhale_overlay`
### View networks again
> `docker network ls`
### Create a node service attaching the the overlay network
> `docker service create --name node --publish target=8080,published=8001 --replicas=5 --network bluewhale_overlay mashuqrahman/repository:node1node`
### View services
> `docker service ps node`
### Test the network
> `curl -i http://192.168.99.100:8001`

> `curl -i http://192.168.99.101:8001`

> `curl -i http://192.168.99.102:8001`
### Create an attahable overlay network
> `docker network create -d overlay --attachable bluewhale_overlay_attachable`
### View the networks
> `docker network ls`
### View the newly created overlay network
> `docker network inspect bluewhale_overlay_attachable`
### Remove the nodes from previous overlay network and attch to the new one
> `docker service update --network-add bluewhale_overlay_attachable --network-rm bluewhale_overlay node`
### Run a standalone container
> `docker run -dit --name spring mashuqrahman/repository:node2spring`
### Attach to the attacbale overlay network
> `docker network connect bluewhale_overlay_attachable spring`
### Login into the standalone container and test the connectivity with the other nodes
> `docker exec -it spring /bin/bash`

> `curl -i http://192.168.99.100:8001`

> `curl -i http://192.168.99.101:8001`

> `curl -i http://192.168.99.102:8001`
### Exit and stop the virtual machines
> `exit`

> `docker-machine stop one`

> `docker-machine stop two`

> `docker-machine stop three`
