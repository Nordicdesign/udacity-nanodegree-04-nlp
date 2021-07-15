import checkURL from './checkURL'

export default function formHandler(e) {
  e.preventDefault()
  let url = document.getElementById('url').value
  if (checkURL(url)) {
    console.log("do something")
  }
}
