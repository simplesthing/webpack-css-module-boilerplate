// import css
const s = require('./header.css')


const header = document.querySelector('header')
const box = document.createElement('div')
box.classList.add(s.autoprefixed)

header.appendChild(box)
