# Quickly build your own GraphQL server and persist data. 

This project is initially based on an awesome workshop from Nodevember 2017 by [Eve Porcello](https://github.com/eveporcello/nodevember/tree/master/graphql-service).

Using [apollo-server-express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express) we spin up a [grapiql](https://github.com/graphql/graphiql) server:)

You might notice that this uses a local file system to persist data. Obviously, this isn't scalable, but it sure is a quick easy way to begin doing mutations through the graphiql interface.

Also, there is no hot reloading, so you will have to stop and start the server manually after changes to the code have been made.

There are two endpoints that accept requests. 
 * '/graphiql' has the nice ui for querying and mutating the data.  
 * '/squirrel' is the basic endpoint you can send raw http requests to.
   * ex. '/squirrel?query={allRows{id}}'

## Instructions to Setup
 * ```git clone https://github.com/Lyonsclay/squirrel_recognizer```
 * ```yarn``` or ```npm install```
 * ```yarn start``` or ```npm start```
  * Visit localhost:5000/graphiql

Try building your own schema and resolvers with this repo as reference. Then why not deploy it publically for free with a Docker image.

# Dockerize your App
From the official Node [docks](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
  
You will need to make sure that you are exposing the same port when you follow the next step.

In './Dockerfile'
```EXPOSE 5000```.

In './index.js'
```const PORT = 5000```.
  
# Deploy to EC2
  * Follow this awesome [tutorial](https://www.ybrikman.com/writing/2015/11/11/running-docker-aws-ground-up/).
  
  * If you want to install git and download your repo right into the EC2 instance once you have ssh'ed into the server as ec2-user as described in the tutorial use the following instructions.
    * ```sudo yum install git```
    * ```git clone https://github.com/Lyonsclay/squirrel_recognizer.git``` or whatever your repo is.
    * Be sure to get the https link so you don't have to setup your github keys on the server.
    * ```cd squirrel_recognizer```
    * ```docker build -t <your name>/squirrel``` 
    * ```docker run -p 80:5000 -d <your name>/squirrel```
    * Find the public ip address in the EC2 console in the instances tab, and put that into your browser. Blamo!
    * To make changes you will have to kill the running container.
    * ```docker container ls```
    * Grab the CONTAINER ID
    * ```docker kill <CONTAINER ID>```
    * ```git pull``` Pull your changes into the local code base.
    * Repeat `docker build` and `docker run` and your off to the races!

## Next Up
The next part of this project will be to use a create-react-app as an Apollo client and communicate to your graphql enpoint.
  
