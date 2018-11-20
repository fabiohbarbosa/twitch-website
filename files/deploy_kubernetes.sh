#!/bin/bash
set -e # ensure that this script will return a non-0 status code if any of rhe commands fail
set -o pipefail # ensure that this script will return a non-0 status code if any of rhe commands fail

VERSION=$1

cat << EOF > service.yaml

---
apiVersion: v1
kind: Service
metadata:
  name: frontend-website
spec:
  selector:
    app: frontend-website
  ports:
    - port: 3000
      name: 'application'

---
apiVersion: extensions/v1beta1
kind: Deployment

metadata:
  name: frontend-website
  labels:
    imageTag: '$VERSION'
spec:
  revisionHistoryLimit: 15
  replicas: $REPLICAS
  strategy:
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
  template:
    metadata:
      labels:
        app: frontend-website
    spec:
      containers:
      - name: frontend-website
        image: gcr.io/$GCP_PROJECT/frontend/website:$VERSION
        ports:
          - containerPort: 3000
        readinessProbe:
          httpGet:
            path: /website/healthcheck
            port: 3000
          initialDelaySeconds: 15
          timeoutSeconds: 1
          periodSeconds: 5
          failureThreshold: 1
        livenessProbe:
          httpGet:
            path: /website/healthcheck
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 15
          timeoutSeconds: 5
          failureThreshold: 4
        resources:
          limits:
            memory: 1500Mi
          requests:
            memory: 1500Mi

EOF
cat service.yaml
kubectl apply -f service.yaml
