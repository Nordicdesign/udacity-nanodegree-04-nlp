import checkURL from './checkURL'

export default async function formHandler(e) {
  e.preventDefault()
  let article = document.getElementById('url').value
  if (checkURL(article)) {
    const url = 'http://localhost:8080/analyse'
    const payload = {
      'url': article
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      let result = await response.json()
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  } else {
    console.log("URL looks doggy")
  }
}
