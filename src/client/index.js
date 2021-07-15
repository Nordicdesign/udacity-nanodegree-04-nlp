import './styles/main.scss'
import "regenerator-runtime/runtime.js" // to bring async to babel
import formHandler from './js/formHandler'


// execute the things
(function() {
  document.getElementById('formArticle').addEventListener('submit', formHandler)
}())
