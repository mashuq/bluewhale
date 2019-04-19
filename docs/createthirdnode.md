# For First Node : Nodejs Application

### Building first node
`sudo docker build -t node3python node3python/`

### Running first node on port 8080
`sudo docker run -p 8080:8080 -d node3python`

### Testing first node
`curl -i localhost:8080`

### Viewing first node run details
`sudo docker ps`

### Viewing first node log
`sudo docker logs <container id>`

### Stopping Docker Run
`sudo docker stop <container id>`

### Accessing the Running Instance
`docker exec -it <container id> /bin/bash`

### Login to docker
`sudo docker login`

### Tag the image
`sudo docker tag node3python mashuqrahman/repository:node3python`

### Push the image
`sudo docker push mashuqrahman/repository:node3python`

### Run from any machine
`sudo docker run -p 8080:8080 mashuqrahman/repository:node3python`