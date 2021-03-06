Twitch Website
=====================

## Links:
- [CI/CD](https://circleci.com/gh/fabiohbarbosa/workflows/twitch-website)
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

- CYPRESS_BASE_URL: Cypress base URL that has the production host address
- CYPRESS_RECORD_KEY: Cypress record key to store test reports into the [dashboard](https://dashboard.cypress.io/#/projects/3zzwmr/)
- ENV_URL: Kubernetes URL to be used in *healthcheck job*.
- GITHUB_TOKEN: Github user token to push tags and relese files.
- GOOGLE_AUTH: Google Cloud service account to deploy service in the Kubernetes.

*All variables are configured in CircleCi `twitch-envs` context to shared accross all projects.*

## CI latest report
[Latest Report](https://drive.google.com/open?id=10Moud3DXCzjaffxW6YITXZv81gIN2Yjs)
