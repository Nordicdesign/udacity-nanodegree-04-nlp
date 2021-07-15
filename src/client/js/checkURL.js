export default function checkURL(url) {
  return /^(http|https):\/\/[^ "]+$/.test(url)
}
