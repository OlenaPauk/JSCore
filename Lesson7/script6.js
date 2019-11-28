let windowS = document.getElementById('windowSize');
window.addEventListener("resize", function(){
    windowS.innerHTML =`Width = ${window.innerWidth} , Height = ${window.innerHeight}`;
});