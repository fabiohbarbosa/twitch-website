#---- STAGE 1 - build stage ----
FROM node:11.1.0 as builder

ARG WORKDIR=/frontend-website
RUN mkdir -p ${WORKDIR}
WORKDIR ${WORKDIR}

COPY build build
COPY src src
COPY static static

COPY .babelrc .
COPY index.html .
COPY package.json .
COPY package-lock.json .
COPY server.js .

RUN npm i
RUN npm run build

# ---- STAGE 2 - final image stage ----
FROM node:11.1.0-alpine

ARG WORKDIR=/frontend-website
RUN mkdir -p ${WORKDIR}
WORKDIR ${WORKDIR}

COPY --from=builder ${WORKDIR}/dist/ dist/
COPY server.js .

# take care to keep the same package version specified in package.json
RUN npm i express@^4.16.4 helmet@^3.15.0

EXPOSE 3000
CMD ["node", "server.js"]
