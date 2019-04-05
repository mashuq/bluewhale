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
