## Enable Istio with kubernetes
### Start Kubernetes
`sudo minikube start --memory=8192 --cpus=4`

`sudo minikube addons enable ingress`
### Run the deployments and servicies
`sudo kubectl apply -f kubernetes_config/`
### Get Istio
`https://git.io/getLatestIstio`

`curl -L https://git.io/getLatestIstio | ISTIO_VERSION=1.1.3 sh -`

`cd istio*`
### Configure Istio into kubernetes
`for i in install/kubernetes/helm/istio-init/files/crd*yaml; do sudo kubectl apply -f $i; done`

`sudo kubectl apply -f install/kubernetes/istio-demo-auth.yaml`
 
### OR

`sudo kubectl apply -f install/kubernetes/istio-demo.yaml`
### Check istio installation
`sudo kubectl get svc -n istio-system`

`sudo kubectl get pods -n istio-system`
### Configure Istio for auto side car injection
`sudo kubectl get namespace -L istio-injection`

`sudo kubectl label namespace istio-system istio-injection=enabled --overwrite`

`sudo kubectl label namespace default istio-injection=enabled --overwrite`
### Rerun the deployments and services
`sudo kubectl delete -f kubernetes_config/`

`sudo kubectl apply -f kubernetes_config/`
## Install Kiali for visualization
`wget https://git.io/getLatestKialiOperator`

`mv getLatestKialiOperator getLatestKialiOperator.bash`

`chmod +x getLatestKialiOperator.bash `

`sudo ./getLatestKialiOperator.bash`
### Run Kiali
`sudo kubectl -n istio-system port-forward $(sudo kubectl -n istio-system get pod -l app=kiali -o jsonpath='{.items[0].metadata.name}') 20001:20001`
### Access page
`http://localhost:20001/kiali/console/`