let listaAmigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;

    if (nome == '') {
        alert('Escreva um nome no Campo!');
    } else if (listaAmigos.includes(' '+nome)) {
        alert(`O nome ${nome} já foi adicionado!`);
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
    if (listaAmigos.length <= 2) {
        alert("Adicione pelo menos 3 pessoas para fazer o sorteio.");
    } else {    
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
        
        for(i = 0; i < novaLista.length; i++){
            let listaSorteada = document.getElementById('lista-sorteio');
            if (i == novaLista.length - 1) {
                listaSorteada.innerHTML += novaLista[i] + ' --> ' + novaLista[0];
            } else {
                listaSorteada.innerHTML += novaLista[i] + ' --> ' + novaLista[i+1] + '<br>';  
            }
            
        }
        
    }
}

function apagarSorteio(){
    let listaSorteada = document.getElementById('lista-sorteio');
    listaSorteada.innerHTML = '';
}