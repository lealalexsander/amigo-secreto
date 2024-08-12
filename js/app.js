let listaAmigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;

    if (nome == '') {
    } else {
        listaAmigos.push(' '+nome);
    }
    atualizarLista();
    limparInput();
}

function atualizarLista(){
    let amigosLista = document.getElementById('lista-amigos');
    amigosLista.innerHTML = listaAmigos;
}

function reiniciar(){
    let amigosLista = document.getElementById('lista-amigos');
    amigosLista.innerHTML = '';
    listaAmigos = [];
    apagarSorteio();
}

function limparInput(){
    let nome = document.getElementById('nome-amigo');
    nome.value = '';  
}

function sortear(){   
    apagarSorteio();
    let novaLista = [];
    for(i=0; i<listaAmigos.length; i++){
         nomeEmbaralhado = listaAmigos[Math.floor(listaAmigos.length * Math.random())];
        if (novaLista.includes(nomeEmbaralhado)){
            let nomeEmbaralhado = listaAmigos[Math.floor(listaAmigos.length * Math.random())];
            i-= 1;
        } else {
            novaLista.push(nomeEmbaralhado);
        }
    }
     
    for(i=0; i<novaLista.length; i++){
        let listaSorteada = document.getElementById('lista-sorteio');

        if (i + 1 == novaLista.length) {
            listaSorteada.innerHTML += novaLista[i] + ' -> ' + novaLista[0];
        } else {
            if (i != 0) {
                listaSorteada.innerHTML += novaLista[i] + '<br>' + novaLista[i] +  ' ->';
            } else {
                listaSorteada.innerHTML += novaLista[i] + ' ->';
            }
        } 
    }
    
}

function apagarSorteio(){
    let listaSorteada = document.getElementById('lista-sorteio');
    listaSorteada.innerHTML = '';
}