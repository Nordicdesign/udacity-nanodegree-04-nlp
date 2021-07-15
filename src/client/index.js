import './styles/main.scss'
import formHandler from './js/formHandler'


// execute the things
(function() {
  document.getElementById('formArticle').addEventListener('submit', formHandler)
  console.log('work')
}())
