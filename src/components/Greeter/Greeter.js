// import css
const s = require('./greeter.css')
const greetings = ['hola','salut', 'ciao', 'hej', 'ni hao', 'shalom', 'merhaba', 'foobar']
const greeter = document.getElementById('greetings')
const list = document.createElement('ul')
// apply css name from imported css js object
list.classList.add(s.list)

greetings.map((g, i) => {
  let item = document.createElement('li')
  item.innerHTML = g
  list.appendChild(item)
})

greeter.appendChild(list)
