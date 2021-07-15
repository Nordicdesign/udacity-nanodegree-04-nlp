var express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')

dotenv.config()
const key = process.env.API_KEY

app.use(express.static('dist'))
app.use(cors())


// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
  console.log(`App listening on port ${port}`)
})
