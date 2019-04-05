### Create a user defined bridge network
> `sudo docker network create --driver bridge bluewhale_network`
### View newly created bridge network
> `sudo docker network inspect bluewhale_network`
### Run a container attaching to the bridge network
> `sudo docker run --network bluewhale_network  -dit --name node node1node`
### Run a container then attach to the bridge network
> `sudo docker run -dit --name spring node2spring`

> `sudo docker network connect bluewhale_network spring`
### Log into spring container and ping node
> `sudo docker exec -it spring /bin/bash`

> `curl -i http://localhost:8080/`

> `ping node`

> `exit`
### Log into node container and ping spring
> `sudo docker exec -it node /bin/bash`

> `curl -i http://localhost:8080/`

> `ping spring`

> `exit`
### Detach the containers from the network
> `sudo docker network disconnect bluewhale_network node`

> `sudo docker network disconnect bluewhale_network spring`
