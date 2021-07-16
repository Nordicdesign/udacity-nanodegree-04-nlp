export default function presentAnalysis(data) {
  // write the model
  document.querySelector('.results-model').innerHTML = data.model
  // write if it's ironic
  document.querySelector('.results-irony').innerHTML = data.irony
  // write if it's subjective
  document.querySelector('.results-subjectivity').innerHTML = data.subjectivity
  // hide the loader
  document.querySelector('.loading').classList.remove('visible')
  // display the content
  document.querySelector('.results').classList.add('visible')
}
