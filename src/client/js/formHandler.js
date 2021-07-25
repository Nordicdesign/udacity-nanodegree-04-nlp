import checkURL from './checkURL'
import analyseSentiment from './analyseSentiment'

export async function formHandler(e) {
  e.preventDefault()
  let article = document.getElementById('url').value
  if (checkURL(article)) {
    // show the loader while we wait a response
    document.querySelector('.loading').classList.add('visible')
    analyseSentiment(article)
  } else {
    formFeedback("badURL")
  }
}

export function formFeedback(error) {
  const p = document.querySelector('.formError')
  // using a switch in preparation for future cases that needs to be handled
  switch (error) {
  case "badURL":
    p.innerHTML = "That URL looks dodgy. Make sure it includes http/https"
    p.classList.add("visible")
    break
  default:
    return
  }
}
