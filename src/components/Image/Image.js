// import css
const s = require('./image.css')
const imagesection = document.getElementById('image')
const img = document.createElement('div')
// apply css name from imported css js object
img.classList.add(s.img)
imagesection.appendChild(img)
