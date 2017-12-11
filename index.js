const express = require('express')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')

const schema = requier('./schema')

const sendHTMLPage = (req, res) =>
      res.status(200).send(`

<!DOCKTYPE html>
<html>
  <head>
    <title>AI Squirrel Identifier</title>
  <head/>
  <body>
    <h1>GraphQL and Apollo Workshop</h1>
    <p></p>
  </body>
</html>
`)

var app = express()

app.use(cors())
app.get('/', sendHTMLPage)

app.use('/squirrel',
        bodyParser.json(),
        graphqlExpress({
          schema
        })
       )

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)
app.listen(4000, () =>
	         console.log(`app running at graphiql running at '/squirrel'`)
          )
