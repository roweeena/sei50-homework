console.log('hello')

$("#toggleNav").on("click",function(){
    console.log('click')
    $("nav").toggle("display")
})

let urlmenu = document.getElementById('bioskip');
urlmenu.onchange = function () {
    window.open(this.options[this.selectedIndex].value, "_self")
}