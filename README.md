This project is initially based on an awesome workshop from Nodevember 2017 by [Eve Porcello](https://github.com/eveporcello/nodevember/tree/master/graphql-service).

Using [apollo-server-express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express) we spin up a [grapiql](https://github.com/graphql/graphiql) server:)

You might notice that this uses a local file system to persist data. Obviously, this isn't scalable, but it sure is a quick easy way to begin doing mutations through the graphiql interface.

There are two endpoints that accept requests. 
 * '/graphiql' has the nice ui for querying and mutating the data.  
 * '/squirrel' is the basic endpoint you can send raw http request to.
   * ex. '/squirrel?query={allRows{id}}'

# Instructions to Setup
```git clone https://github.com/Lyonsclay/squirrel_recognizer```
```yarn```
```yarn start```
  * Visit localhost:4000/graphiql

Try building your own schema and resolvers with this as reference. Then why not deploy it publically for free with a Docker image.

# Dockerize your App
  * From the official Node [docks](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
  
You will need to make sure that you are exposing the same port when you follow the next step. So make these changes;

'./Dockerfile'
```EXPOSE 5000```

'./index.js'
```const PORT = 5000```
  
# Deploy to EC2
  * Follow this awesome [tutorial](https://www.ybrikman.com/writing/2015/11/11/running-docker-aws-ground-up/).


  
