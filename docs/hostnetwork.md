### Run a container attaching to the host network
> `sudo docker run --network host  -dit --name node node1node`

### Test it
> `curl http://localhost:8080/`