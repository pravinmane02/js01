const button =  document.querySelector("button")
const body =  document.querySelector("body")
const color = ['red','black','pink','yello','green']

body.style.backgroundColor = '#3017'

button.addEventListener(`click` , changeB)

function  changeB (){
    const colorIndex =parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}
