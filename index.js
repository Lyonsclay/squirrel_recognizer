const express = require('express')
const cors = require('cors')
const {
  graphqlExpress,
  graphiqlExpress
} = require('apollo-server-express')
const bodyParser = require('body-parser')

const schema = require('./schema')

const sendHTMLPage = (req, res) =>
      res.status(200).send(`

<!DOCKTYPE html>
<html>
  <head>
    <title>AI Squirrel Identifier</title>
  <head/>
  <body>
    <h1>Squirrel Analizer Data Resources GraphQL Inteface</h1>
    <p><a href="/graphiql">GraphiQL</a>/p>
    <p><a href="/squirrel">http access</a>/p>
    <p></p>
  </body>
</html>
`)

var app = express()

app.use(cors())
app.get('/', sendHTMLPage)

app.use(
  '/squirrel',
  bodyParser.json(),
  graphqlExpress({
    schema
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/squirrel'
  })
)

const HOST = '0.0.0.0'
const PORT = 5000

app.listen(PORT, HOST)

console.log(`app running at '/graphiql' running at '/squirrel'`)
