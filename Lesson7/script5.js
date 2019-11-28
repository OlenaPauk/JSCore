btn.addEventListener('click',function () {
    p.innerHTML+="<br>I was pressed!";
})
btn.addEventListener('mouseover',function () {
    p.innerHTML+="<br>Mouse on me!";
})
btn.addEventListener('mouseout',function () {
    p.innerHTML+="<br>Mouse is not on me!";
})