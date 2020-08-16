var intervalo1, intervalo2, tempo = 1000, pontos, id = 0, vidas, nome, data,pause = false;
function MoverMenu(){
    pause = true;
    document.getElementById("myHeader").style.top = "0px";
    document.getElementById("fundoEsc").style.visibility = "unset";
    clearInterval(intervalo1);
}

function IniciarJogo(){
    if(pause == true){
        document.getElementById("myHeader").style.top = "-75px";
        document.getElementById("fundoEsc").style.visibility = "hidden";
        document.getElementById("myDropdown").style.display = "none";
        pause = false;
        intervalo1 = setInterval(AdicionarEstrela,tempo);
    } else{
        pontos = 0;
        document.getElementById('pontos').innerHTML = String(pontos);
        vidas = 3;
        document.getElementById("myHeader").style.top = "-75px";
        document.getElementById("fundoEsc").style.visibility = "hidden";
        document.getElementById("myDropdown").style.display = "none";
        intervalo1 = setInterval(AdicionarEstrela,tempo);
    }
}

function AdicionarEstrela(){
    var varEstrela = document.createElement('img');
    varEstrela.id = 'estrela' + toString(id);
    varEstrela.className = 'estrela';
    varEstrela.src = "imagens/estrela.png";
    var n1, n2;
    n1 = Math.floor(Math.random() * 430 + 1);
    toString(n1);
    varEstrela.style.marginTop = n1 + 'px';
    n2 = Math.floor(Math.random() * 90 + 1);
    toString(n2);
    varEstrela.style.marginLeft = n2 + '%';
    varEstrela.onclick = function(){
        document.getElementById(varEstrela.id).src = "imagens/estrelacinza.png";
        pontos++;
        document.getElementById('pontos').innerHTML = String(pontos);
    };
    document.getElementById("jogo").appendChild(varEstrela);
    intervalo2 = setTimeout(ApagarEstrela,1000,varEstrela.id);
    id++;
}

function ApagarEstrela(idEstrela){
    var caminho = document.getElementById(idEstrela).src;
    caminho = caminho.substr(22,undefined);
    if(caminho == 'imagens/estrela.png'){
        document.getElementById('coracao' + vidas).remove();
        vidas--;
    }
    document.getElementById(idEstrela).remove();
    if(vidas == 0){
        FimDeJogo();
    }
}

function FimDeJogo(){
    document.getElementById("myHeader").style.top = "0px";
    document.getElementById("fundoEsc").style.visibility = "unset";
    document.getElementById("pontuacaoAtual").innerHTML = String(pontos);
    document.getElementById("myDropdown").style.display = "block";
    document.getElementById("myInput").focus();
    clearInterval(intervalo1);
}

function DroparMenu(){
    document.getElementById("myDropdown").classList.toggle("show");
}

function SalvarRecord(){
    nome = document.getElementById("myInput").value;
}