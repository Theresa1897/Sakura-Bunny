// var canvas = document.querySelector('canvas')

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// console.log(canvas);

// setTimeout (function(){
//     var title = document.querySelector("#title")
//     title.classList.add("slide_in")
// },1000)

function startAnimation(id, startTime, animation){
    setTimeout(function(){
        var element = document.querySelector(id)
        element.classList.add(animation)
        element.classList.add()
    },startTime*1000)
}
// startAnimation("#title", 1, "slide_in")
startAnimation("#play", 1, "slide_in")