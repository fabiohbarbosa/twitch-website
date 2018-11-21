Twitch Website
=====================

## Links:
- [CI/CD](https://circleci.com/gh/fabiohbarbosa/twitch-website)
- [Kubernetes Healthcheck](http://35.244.227.171/website/healthcheck)
- [Demo URL](http://35.244.227.171)
- [E2E Tests Report](https://dashboard.cypress.io/#/projects/3zzwmr/runs)

## NVM
Change your node version to a project current node version.

`nvm use`

## ESLint
`npm run lint`

## ESLint Fix
`npm run lint:fix`

## Test
`npm test`

## Build
`npm run build`

## Run
`npm start`

## Run as a DEV
`npm run start:dev`

## Environment Variables

**CI/CD Variables**

- ENV_URL: Kubernetes URL to be used in *healthcheck job*.
- GITHUB_TOKEN: Github user token to push tags and relese files.
- GOOGLE_AUTH: Google Cloud service account to deploy service in the Kubernetes.

*The last 3 ones are configured in CircleCi `twitch-envs` context to shared accross all projects.*
