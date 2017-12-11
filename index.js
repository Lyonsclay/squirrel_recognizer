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
    <h1>Run This Now</h1>
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

app.listen(4000, () =>
           console.log(`app running at graphiql running at '/squirrel'`)
          )
