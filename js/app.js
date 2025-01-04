let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    if (amigo.value === '') {
        alert('Você nao pode adicionar um amigo sem nome');
        return;
    }


    if (amigos.includes(amigo.value)) {
        alert('Diferencie os amigos para sortear');
        return;
    }
    amigos.push(amigo.value);
    if (lista.textContent === '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear() {
    embaralha(amigos);

    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 pesssoas para sortear');
        return;
    }

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' tirou ' + amigos[(0)] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' tirou ' + amigos[(i + 1)] + '<br>';
        }
    }




}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}