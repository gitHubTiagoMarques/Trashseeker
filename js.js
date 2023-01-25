onload = function (){
    alert("'F11' ou 'CTRL + CMND + F' para uma melhor experiência!");
    document.getElementById("hist").onclick = function (){
        document.getElementById("logo").style.display = "none";
        document.getElementById("pg_inicial").style.display = "none";
        document.getElementById("video").style.display = "block";
        document.getElementById("voltar").style.display = "block";
        ecra = "hist";
    }
    document.getElementById("jogar").onclick = function (){
        document.getElementById("pg_escolher").style.display = "block";
        document.getElementById("pg_inicial").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        ecra = "escolher";
    }
    document.getElementById("dontdrown").onclick = function (){
        document.getElementById("pg_dificuldade").style.display = "block";
        document.getElementById("pg_escolher").style.display = "none";
        jogo = "drown";
        ecra = "dif";
    }
    document.getElementById("tenta").onclick = function (){
        if (jogo === "drown"){
            drown();
        }
        if (jogo === "rain"){
            rain();
        }
        if (jogo === "trashrun"){
            trashrun();
        }
    }
    document.getElementById("facil").onclick = function (){
        dif = 1
        drown();
    }
    document.getElementById("norm").onclick = function (){
        dif = 2
        drown();
    }
    document.getElementById("dif").onclick = function (){
        dif = 3
        drown();
    }
    document.getElementById("inicio").onclick = function (){
        document.getElementById("vermelho").style.display = "none";
        document.getElementById("verde").style.display = "none";
        document.getElementById("pg_inicial").style.display = "block";
        document.getElementById("fundo").style.display = "block";
        document.getElementById("pg_perdeu").style.display = "none";
        document.getElementById("voltar").style.display = "none";
    }
    document.getElementById("rain").onclick = function (){
        rain();
        jogo = "rain"
    }
    document.getElementById("trashrun").onclick = function(){
        trashrun();
        jogo = "trashrun"
    }
    document.getElementById("como").onclick = function (){
        document.getElementById("pg_como").style.display = "block";
        document.getElementById("pg_inicial").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        ecra = "como";
    }
    document.getElementById("trashruncomo").onclick = function (){
        document.getElementById("logo").style.display = "none";
        document.getElementById("pg_como").style.display = "none";
        document.getElementById("fundo").style.display = "none";
        document.getElementById("imgcomo1").style.display = "block";
        ecra = "imgcomo";
    }
    document.getElementById("dontdrowncomo").onclick = function (){
        document.getElementById("logo").style.display = "none";
        document.getElementById("pg_como").style.display = "none";
        document.getElementById("fundo").style.display = "none";
        document.getElementById("imgcomo2").style.display = "block";
        ecra = "imgcomo";
    }
    document.getElementById("raincomo").onclick = function (){
        document.getElementById("logo").style.display = "none";
        document.getElementById("pg_como").style.display = "none";
        document.getElementById("fundo").style.display = "none";
        document.getElementById("imgcomo3").style.display = "block";
        ecra = "imgcomo";
    }
    document.getElementById("voltar").onclick = voltar;
}

var dif;
var bonecodrown;
var aguadrown;
var resultado;
var n;
var jogo;
var rng;
var points;
var highscore = 0;
var res = 1;
var ecra;


function drown(){
    document.getElementById("voltar").style.display = "none";
    document.getElementById("pg_perdeu").style.display = "none";
    document.getElementById("vermelho").style.display = "none";
    document.getElementById("verde").style.display = "none";
    document.getElementById("pg_dificuldade").style.display = "none";
    document.getElementById("fundo").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("fundodrown").style.display = "block";
    document.getElementById("poste").style.display = "block";
    document.getElementById("jogdrown").style.display = "block";
    document.getElementById("jogdrown").style.top = 810 + "px";
    document.getElementById("agua").style.display = "block";
    document.getElementById("agua").style.top = 1080 + "px";
    descida = setInterval(desce_jogador,500);
    subida = setInterval(subida_agua,25);
    colisao = setInterval(drowncolisao,1);
    console.log(bonecodrown);

    onkeyup = function (event){
        if (dif === 1){
            movdrown(event,12)
        }
        if (dif === 2){
            movdrown(event,8)
        }
        if (dif === 3){
            movdrown(event,5.4)
        }
    }


function movdrown(event,vel){
    switch (event.keyCode){
        case 32:
            if (parseInt(document.getElementById("jogdrown").style.top) > 170 ){
                document.getElementById("jogdrown").style.top = parseInt(document.getElementById("jogdrown").style.top) - vel + "px";
            }
            else if (document.getElementById("fundodrown").style.display != "none"){
                resultado = "ganhou";
                fim_drown();
            }
    }
    return resultado;

}

}

function desce_jogador() {
    if (parseInt(document.getElementById("jogdrown").style.top) < 450) {
        document.getElementById("jogdrown").style.top = parseInt(document.getElementById("jogdrown").style.top) + 10 + "px";
    }
    else if (parseInt(document.getElementById("jogdrown").style.top) < 650) {
        document.getElementById("jogdrown").style.top = parseInt(document.getElementById("jogdrown").style.top) + 3 + "px";

    }
}

function subida_agua(){
    document.getElementById("agua").style.top = parseInt(document.getElementById("agua").style.top) - 1 + "px";
}

function drowncolisao(){
    bonecodrown = parseInt(document.getElementById("jogdrown").style.top) + document.getElementById("jogdrown").height;
    aguadrown = parseInt(document.getElementById("agua").style.top);

    if (bonecodrown > aguadrown){
        resultado = "perdeu";
        fim_drown();
    }
    return resultado;

}

function fim_drown(){
    clearInterval(subida);
    clearInterval(descida);
    clearInterval(colisao);
    document.getElementById("logo").style.display = "block";
    document.getElementById("pg_perdeu").style.display = "block";
    document.getElementById("agua").style.display = "none";
    document.getElementById("jogdrown").style.display = "none";
    document.getElementById("fundodrown").style.display = "none";
    document.getElementById("poste").style.display = "none";
    if (resultado === "perdeu"){
        document.getElementById("vermelho").style.display = "block";
    }
    else if (resultado === "ganhou"){
        document.getElementById("verde").style.display = "block";
    }
}

function rain (){
    document.getElementById("voltar").style.display = "none";
    document.getElementById("heart1").src = "images/heart.png";
    document.getElementById("heart2").src = "images/heart.png";
    document.getElementById("heart3").src = "images/heart.png";
    document.getElementById("pg_perdeu").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("pg_escolher").style.display = "none";
    document.getElementById("fundo").style.display = "none";
    document.getElementById("fundorain").style.display = "block";
    document.getElementById("jograin").style.display = "block";
    document.getElementById("hearts").style.display = "block";
    document.getElementById("jograin").style.left = 50 + "px";
    n = 0;
    setTimeout(chuvarng = setInterval(chuva,500),300);

    onkeydown = function (event){
        movrain(event);
    }
}


function movrain (event){
    switch (event.keyCode){
        case 39:{
            document.getElementById("jograin").style.left = parseInt(document.getElementById("jograin").style.left) + 90 + "px";

            if (document.getElementById("chuva").style.display != "none"){
                document.getElementById("heart3").src = "images/noheart.png";
                setTimeout(danorain,200);
                setTimeout(raindano,400);
                setTimeout(danorain,600);
                setTimeout(raindano,800);
                n++;
            }
            if (n == 2){
                document.getElementById("heart2").src = "images/noheart.png";
            }
            if (n == 3){
                document.getElementById("heart1").src = "images/noheart.png";
                resultado = "perdeu";
                fim_rain()
            }
            if (n != 3){
                if (parseInt(window.getComputedStyle(document.getElementById("jograin")).getPropertyValue("left")) > 1789){
                    resultado = "ganhou";
                    fim_rain();
                }
            }
        return resultado;
        }
        break;
        case 68:{
            document.getElementById("jograin").style.left = parseInt(document.getElementById("jograin").style.left) + 90 + "px";

            if (document.getElementById("chuva").style.display != "none"){
                document.getElementById("heart3").src = "images/noheart.png";
                setTimeout(danorain,200);
                setTimeout(raindano,400);
                setTimeout(danorain,600);
                setTimeout(raindano,800);
                n++;
            }
            if (n == 2){
                document.getElementById("heart2").src = "images/noheart.png"
            }
            if (n == 3) {
                document.getElementById("heart1").src = "images/noheart.png"
                resultado = "perdeu";
                fim_rain();
            }
            if (n != 3){
                if (parseInt(window.getComputedStyle(document.getElementById("jograin")).getPropertyValue("left")) > 1789){
                    resultado = "ganhou";
                    fim_rain();
                }
            }
        }
        return resultado;

    }
}

function chuva(){
    if (res === 1){
        document.getElementById("chuva").style.display = "block";
    }
    if (res === 0){
        document.getElementById("chuva").style.display = "none";
    }
    res = Math.floor(Math.random()*2);
}

function danorain(){
    document.getElementById("jograin").src = "images/jograindano.png";
}

function raindano(){
    document.getElementById("jograin").src = "images/jograin.png";
}

function fim_rain(){
    document.getElementById("fundorain").style.display = "none";
    document.getElementById("jograin").style.display = "none";
    document.getElementById("hearts").style.display = "none";
    document.getElementById("chuva").style.display = "none";
    document.getElementById("pg_perdeu").style.display = "block";
    document.getElementById("logo").style.display = "block";
    clearInterval(chuvarng)
    if (resultado === "perdeu"){
        document.getElementById("vermelho").style.display = "block";
    }
    else if (resultado === "ganhou"){
        document.getElementById("verde").style.display = "block";
    }
}


function salto(){
    if (document.getElementById("barco").classList != "salto"){
        document.getElementById("barco").classList.add("salto");
        setTimeout(function (){
            document.getElementById("barco").classList.remove("salto");
        },700)
    }
}

function movrun(event){
    switch (event.keyCode){
        case 32:{
            if (parseInt(document.getElementById("barco").style.top) != 740 && document.getElementById("fundorun").style.display != "none") {
                    document.getElementById("espuma").style.display= "none";
                    if (document.getElementById("vermelho").style.display != "block"){
                        setTimeout(function (){document.getElementById("espuma").style.display= "block";},700);
                    }
            }
            salto();
        }
    }
}

function fim_trashrun(){
    document.getElementById("fundorun").style.display = "none";
    document.getElementById("barco").style.display = "none";
    document.getElementById("espuma").style.display = "none";
    document.getElementById("obstaculo").style.display = "none";
    document.getElementById("pg_perdeu").style.display = "block";
    document.getElementById("logo").style.display = "block";
    document.getElementById("score").style.display = "none";
    clearInterval(vivo);
    clearInterval(obs)
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},100);
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},200);
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},300);
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},400);
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},500);
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},600);
    setTimeout(function (){document.getElementById("espuma").style.display = "none"},700);

    document.getElementById("vermelho").style.display = "block";
}

function trashrun(){
    document.getElementById("voltar").style.display = "none";
    document.getElementById("pg_escolher").style.display = "none";
    document.getElementById("pg_perdeu").style.display = "none";
    document.getElementById("fundo").style.display = "none";
    document.getElementById("vermelho").style.display = "none";
    document.getElementById("barco").style.display = "block";
    document.getElementById("obstaculo").style.display = "block";
    document.getElementById("fundorun").style.display = "block";
    document.getElementById("espuma").style.display = "block";
    obs = setInterval(imgobs,1500);
    points = 0
    document.getElementById("score").innerHTML = points + " | " + highscore;
    document.getElementById("score").style.display = "block";

    onkeydown = function (event){
        movrun(event);
    }

    vivo = setInterval(function () {
        var drtbarco = parseInt(window.getComputedStyle(document.getElementById("barco")).getPropertyValue("top"));
        var esqobs = parseInt(
            window.getComputedStyle(document.getElementById("obstaculo")).getPropertyValue("left"));

        if (rng != 1 ){
            if (esqobs < 346 && esqobs > -154 && drtbarco >= 630) {
                fim_trashrun();
            }
        }
        if (rng == 1){
            if (esqobs < 346 && esqobs > -154 && drtbarco >= 630) {
                points += 10;

                if (highscore<points){
                    highscore = points;
                }
                document.getElementById("score").innerHTML = points + " | " + highscore;
            }
        }
    }, 10);
}

function imgobs(){
    rng = Math.floor((Math.random()*3) + 1);
    if (rng == 1){
        document.getElementById("obstaculo").src = "images/lixo.png";
    }
    if (rng == 2){
        document.getElementById("obstaculo").src = "images/moliceiro.png";
    }
    if (rng == 3){
        document.getElementById("obstaculo").src = "images/tronco.png";
    }
}

function voltar (){
    if (ecra == "escolher"){
        document.getElementById("pg_escolher").style.display = "none";
        document.getElementById("pg_inicial").style.display = "block";
        document.getElementById("voltar").style.display = "none";
    }
    if (ecra == "dif"){
        document.getElementById("pg_dificuldade").style.display = "none";
        document.getElementById("pg_escolher").style.display = "block";
        ecra = "escolher"
    }
    if (ecra == "como"){
        document.getElementById("pg_como").style.display = "none";
        document.getElementById("pg_inicial").style.display = "block";
        document.getElementById("voltar").style.display = "none";
    }
    if (ecra == "hist"){
        document.getElementById("video").style.display = "none";
        document.getElementById("pg_inicial").style.display = "block";
        document.getElementById("logo").style.display = "block";
        document.getElementById("voltar").style.display = "none";
    }
    if (ecra == "imgcomo"){
        document.getElementById("logo").style.display = "block";
        document.getElementById("pg_como").style.display = "block";
        document.getElementById("fundo").style.display = "block";
        document.getElementById("imgcomo1").style.display = "none";
        document.getElementById("imgcomo2").style.display = "none";
        document.getElementById("imgcomo3").style.display = "none";
        ecra = "como";
    }
}
