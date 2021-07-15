var express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const fetch = require('node-fetch')

dotenv.config()
const key = process.env.API_KEY

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())


async function analyseData(url) {
  const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'
  const requestOptions = {
    method: 'POST',
    redirect: 'follow'
  }

  try {
    const response = await fetch(`${apiUrl}?key=${key}&lang=en&url=${url}`, requestOptions)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

app.post('/analyse', async function(req,res) {
  const result = await analyseData(req.body.url)
  res.send(result)
})


// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
  console.log(`App listening on port ${port}`)
})
