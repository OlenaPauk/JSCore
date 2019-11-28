let btnDel = document.getElementById('deleteBnt');
btnDel.addEventListener('click', function () {
    let name = document.getElementById("mySelect");
    name.remove(name.selectedIndex);
})