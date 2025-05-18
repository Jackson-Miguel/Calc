
    var tela = document.getElementById("tela");
    var soma = document.getElementById("btn_m");var sub = document.getElementById("btn_-");
    var multi = document.getElementById("btn_X");var div = document.getElementById("btn_div");
    var porcent = document.getElementById("btn_porcent");
    var limp = document.getElementById("btn_limpar");
    var apag1 = document.getElementById("btn_apagar");
    var vir = document.getElementById("btn_v");
    var on = document.getElementById("btn_on");

  window.onload = function() {
    const botoes = document.querySelectorAll("button");
    botoes.forEach(botao => botao.disabled = true);
    on.disabled = false
  };

function ligar(){
    const botoes = document.querySelectorAll("button");
     botoes.forEach(botao => botao.disabled = false);
     on.addEventListener("click", () => {
    const botoes = document.querySelectorAll("button");
    const estaAtivo = Array.from(botoes).some(botao => botao !== on && !botao.disabled);
    botoes.forEach(botao => {
        if (botao !== on) {
            botao.disabled = estaAtivo;
        }
    });
    if (estaAtivo) {
        tela.value = "";
    }
});
}

function add(){
    tela.value += 0
}
function add1(){
    tela.value += 1;
}
function add2(){
    tela.value += 2;
}
function add3(){
    tela.value +=  3;
}
function add4(){
    tela.value += 4;
}
function add5(){
    tela.value += 5;
}
function add6(){
    tela.value += 6;
}
function add7(){
    tela.value += 7
}
function add8(){
    tela.value += 8
}
function add9(){
    tela.value += 9
}
function add_soma(){
        if(tela.value){
    const operadores = ['+', '-', '*', '/'];
    const ultimoNumero = tela.value.split(/[\+\-\*\/]/).pop();
    const ultimoChar = tela.value.slice(-1);

    if (operadores.includes(ultimoChar)) {
        alert("Não é permitido inserir '+' após um operador.");
    } else if (!ultimoNumero.includes("%=+")) {
    tela.value += "+";
    } else {
    alert("Esse número já tem um símbolo de porcentagem.");
    }
        }else{
             window.alert("Escolha um número primeiro")   
        }
}
function add_sub(){
        if(tela.value){
    const operadores = ['+', '-', '*', '/'];
    const ultimoNumero = tela.value.split(/[\+\-\*\/]/).pop();
    const ultimoChar = tela.value.slice(-1);

    if (operadores.includes(ultimoChar)) {
        alert("Não é permitido inserir '-' após um operador.");
    } else if (!ultimoNumero.includes("-")) {
    tela.value += "-";
    } else {
    alert("Esse número já tem um símbolo de porcentagem.");
    }
        }else{
             window.alert("Escolha um número primeiro")   
        }
}
function add_div(){
        if(tela.value){
    const operadores = ['+', '-', '*', '/'];
    const ultimoNumero = tela.value.split(/[\+\-\*\/]/).pop();
    const ultimoChar = tela.value.slice(-1);

    if (operadores.includes(ultimoChar)) {
        alert("Não é permitido inserir '%' após um operador.");
    } else if (!ultimoNumero.includes("÷")) {
    tela.value += "÷";
    } else {
    alert("Esse número já tem um símbolo de porcentagem.");
    }
        }else{
             window.alert("Escolha um número primeiro")   
        }
}
function add_multi(){
        if(tela.value){
    const operadores = ['+', '-', '*', '/'];
    const ultimoNumero = tela.value.split(/[\+\-\*\/]/).pop();
    const ultimoChar = tela.value.slice(-1);

    if (operadores.includes(ultimoChar)) {
        alert("Não é permitido inserir 'x' após um operador.");
    } else if (!ultimoNumero.includes("x")) {
    tela.value += "x";
    } else {
    alert("Esse número já tem um símbolo de porcentagem.");
    }
        }else{
             window.alert("Escolha um número primeiro")   
        }
}
function add_porcent(){
        if(tela.value){
    const operadores = ['+', '-', '*', '/'];
    const ultimoNumero = tela.value.split(/[\+\-\*\/]/).pop();
    const ultimoChar = tela.value.slice(-1);

    if (operadores.includes(ultimoChar)) {
        alert("Não é permitido inserir '%' após um operador.");
    } else if (!ultimoNumero.includes("%")) {
    tela.value += "%";
    } else {
    alert("Esse número já tem um símbolo de porcentagem.");
    }
    }else{
        window.alert("Escolha um número primeiro")
    }
}
function add_vir(){
    if(tela.value){
        const ultimoNumero = tela.value.split(/[\+\-\*\/]/).pop();
    if (!ultimoNumero.includes(".")) {
        tela.value += vir.innerText;
    } else {
        alert("Esse número já tem um ponto decimal.");
    }
    }else{
        window.alert("Escolha um número primeiro")
    }
}
function limpar(){
    if(tela.value){
        tela.value = ""
        vir.disabled = false
    }else{
        window.alert("Não tem nada para limpar")
    }
}
function apagar(){
    if(tela.value){
        tela.value = tela.value.slice(0,-1) 
    }else{
        window.alert("Não tem nada para apagar")
    }
}

function res(){
    if(tela.value.includes("÷")){
        tela.value = tela.value.replace(/÷/g, '/')
        tela.value = eval(tela.value)
    }else if(tela.value.includes("x")){
        tela.value = tela.value.replace(/x/g, '*')
        tela.value = eval(tela.value)
    }else if(tela.value.includes("%")){

    let expressao = tela.value;
    expressao = expressao.replace(/(\d+)%$/g, (match, p1) => `(${p1} / 100)`);
    expressao = expressao.replace(/(\d+)%(?=[\d\(])/g, (match, p1) => `(${p1} / 100)*`);
    expressao = expressao.replace(/(\d+)%/g, (match, p1) => `(${p1} / 100)`);
try {
    let resultado = eval(expressao);
    tela.value = parseFloat(resultado.toFixed(10));
} catch (e) {
    alert("Erro na expressão");
}

}else{
    tela.value = eval(tela.value)
    }
}