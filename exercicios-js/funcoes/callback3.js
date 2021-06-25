//Callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O Evento Ocorreu')
}

document.getElementsByTagName('body')[0].onclick = e => console.log('O Evento Ocorreu com Arrow')
