function zoomin() {
    var GFG = document.getElementById("main-img");
    var currHeight = GFG.clientHeight;
        GFG.style.height = (currHeight + 40) + "px";
        console.log("zoomin")
}
function zoomout() {
    var GFG = document.getElementById("main-img");
    var currHeight = GFG.clientHeight;
        GFG.style.height = (currHeight - 40) + "px";
        console.log("zoomout")

}
