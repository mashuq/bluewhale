# For First Node : Nodejs Application

### Building first node
`sudo docker build -t node4php node4php/`

### Running first node on port 8080
`sudo docker run -p 8080:8080 -d node4php`

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
`sudo docker tag node4php mashuqrahman/repository:node4php`

### Push the image
`sudo docker push mashuqrahman/repository:node4php`

### Run from any machine
`sudo docker run -p 8181:8181 mashuqrahman/repository:node4php`