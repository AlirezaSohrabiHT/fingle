var main = document.getElementById("main-img");
var m_width = main.width;
var m_height = main.height;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
if (vw<=800){
    var element = document.getElementById("wrapper")
    element.classList.remove("wrapper");
    console.log("test")
}

var body = document.getElementById("body");
function ani(){
    console.log(body)
    if (body.classList.contains('angry-animate')){
        console.log("rt")
        body.classList.remove('angry-animate');
    }
    else{
        body.classList.add('angry-animate');

    }
    }
function zoomin(){
    var myImg = document.getElementById("main-img");
    var currWidth = myImg.clientWidth;
    if(currWidth == 2500) return false;
     else{
        myImg.style.borderRadius = 0;
        myImg.style.width = (currWidth + 50) + "px";
        myImg.style.height = (currWidth + 50) + "px";
    } 
    console.log(myImg.width)
}
function zoomout(){
    var myImg = document.getElementById("main-img");
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;
    if(currWidth <= m_width || currHeight <= m_height) {
        myImg.style.width = m_width + "px";
        myImg.style.height = m_height + "px";
        myImg.style.borderRadius = 54 + "px";
        console.log("test")
    }
     else{
        myImg.style.width = (currWidth - 60) + "px";
        myImg.style.height = (currWidth - 60) + "px";
    }
    console.log(myImg.width)
}