function tocaSom(seletorAudio) {
    element = document.querySelector(seletorAudio);


    if (element && element.localName === 'audio') {
        element.play();
    }

    else {
        console.log('Opa, deu algum erro!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        console.log(event)

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

}
