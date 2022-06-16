aws ecr get-login-password --profile annotto --region=eu-central-1 | docker login --username AWS --password-stdin 845067156443.dkr.ecr.eu-central-1.amazonaws.com
docker build -t 845067156443.dkr.ecr.eu-central-1.amazonaws.com/annotto_front:next-k8s . && docker push 845067156443.dkr.ecr.eu-central-1.amazonaws.com/annotto_front:next-k8s
kubectl rollout restart deployment/front-next-k8s -n next-k8s

