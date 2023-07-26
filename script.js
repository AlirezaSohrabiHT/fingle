// function zoomin() {
//     var GFG = document.getElementById("main-img");
//     var currHeight = GFG.clientHeight;
//         GFG.style.height = (currHeight + 40) + "px";
//         console.log("zoomin")
// }
// function zoomout() {
//     var GFG = document.getElementById("main-img");
//     var currHeight = GFG.clientHeight;
//         GFG.style.height = (currHeight - 40) + "px";
//         console.log("zoomout")

// }
function zoomin(){
    var myImg = document.getElementById("main-img");
    var currWidth = myImg.clientWidth;
    if(currWidth == 2500) return false;
     else{
        myImg.style.width = (currWidth + 10) + "px";
        myImg.style.height = (currWidth + 10) + "px";
    } 
}
function zoomout(){
    var myImg = document.getElementById("main-img");
    var currWidth = myImg.clientWidth;
    if(currWidth == 300) return false;
     else{
        myImg.style.width = (currWidth - 100) + "px";
    }
}