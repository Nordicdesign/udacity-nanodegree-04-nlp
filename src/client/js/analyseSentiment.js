import presentAnalysis from './presentAnalysis'

export default async function analyseSentiment(article) {
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
    presentAnalysis(result)
  } catch (error) {
    console.error(error)
  }
}
