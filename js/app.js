let listaAmigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase(); // capitaliza (maiúscula) apenas a primeira letra da variável nome


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
    apagarListaSorteio();
    adicionarListaAmigos();
    let amigosLista = document.getElementById('lista-amigos');
    amigosLista.innerHTML = '';
    listaAmigos = [];
    apagarListaSorteio();
    adicionarListaAmigos();
}

function limparInput(){
    let nome = document.getElementById('nome-amigo');
    nome.value = '';  
}

function sortear(){
    adicionarListaSorteio();
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
    apagarListaAmigos()

}

function apagarSorteio(){
    let listaSorteada = document.getElementById('lista-sorteio');
    listaSorteada.innerHTML = '';
}

function adicionarListaSorteio() {
    let textoSorteio = document.getElementById('lista-amigos-sorteador');
    textoSorteio.innerHTML = `<p class="prizeDraw__title">Sorteio</p><div class="prizeDraw__container"><p id="lista-sorteio"></p></div>`;
    
}

function apagarListaSorteio(){
    textoSorteio = document.getElementById('lista-amigos-sorteador');
    textoSorteio.innerHTML = ``;
}

function apagarListaAmigos(){
    let textoAmigos = document.getElementById('amigos-incluidos');
    textoAmigos.innerHTML = ``;
}

function adicionarListaAmigos(){
    textoAmigos = document.getElementById('amigos-incluidos');
    textoAmigos.innerHTML = `<p class="friends__title">Amigos incluídos</p>
            <div class="friends__container">
              <p id="lista-amigos" class="lista-amigos"></p>
            </div>`;
}

