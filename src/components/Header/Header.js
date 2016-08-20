// import css
const s = require('./header.css')
const header = document.querySelector('header')
const box = document.createElement('div')
// apply css name from imported css js object
box.classList.add(s.autoprefixed)
header.appendChild(box)
