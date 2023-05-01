
const pause = (time) => new Promise((resolve => setTimeout(resolve, time)))

menu = document.getElementById('menu')
menucheck = menu.style.display = "none"
document.getElementById('menu').innerHTML = menucheck
function start() {
    menucheck = menu.style.display = "block"
document.getElementById('menu').innerHTML = menucheck
}




















colorchange()
async function colorchange() {
    for (var i = 0; Infinity > i; i++) {
       i--
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
        for (var count = 0; count < 6; count++) {
            code = code + makeColorCode[Math.floor(Math.random() * 16)];
        }
        document.getElementById("BACKGROUND").style.background = code
        await pause(1000)
    }

}