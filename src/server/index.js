var express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')

dotenv.config()
const key = process.env.API_KEY

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())



// const formdata = new FormData();
// formdata.append("key", "YOUR API KEY");
// formdata.append("txt", "YOUR TEXT HERE");
// formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...
//
// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };
//
// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status,
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));

app.post('/analyse', (req,res) => {
  console.log(req.body)
  res.send(req.body)
})


// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
  console.log(`App listening on port ${port}`)
})
