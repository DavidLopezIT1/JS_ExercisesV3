function sumar(input1s, input2s){
    resultS= +input1s + +input2s;
    return resultS;
}

function mostResultS() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = sumar(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;
}

function resta(input1R, input2R){
    resultS= +input1R - +input2R;
    return resultS;
}

function mostResultR() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = resta(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;
}

function multiplicacion(input1M, input2M){
    resultS= +input1M * +input2M;
    return resultS;
}

function mostResultM() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = multiplicacion(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;
}

function division(input1D, input2D){
    resultS= +input1D / +input2D;
    return resultS;
}

function mostResultD() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = division(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;
}

function potencia(Paramone, paramtwo){
    let resultP = Math.pow(Paramone, paramtwo);
    return resultP;
}

function mostrarPotencia(){
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2');
    let resultText = document.getElementById('resulth2');
    let potencialText = potencia(input1RM.value, input2RM.value);
    resultText.textContent = potencialText;
}

function Raiz(Paramone, Paramtwo){
    if (Paramone) {
        let resultP = Math.sqrt(Paramone);
            return resultP;
        
    }else if(Paramtwo){
            let resultP2 = Math.sqrt(Paramtwo);
                return resultP2;
            }
}

function mostrarRaiz(){
    let input1R = document.getElementById('input1');
    let input2R = document.getElementById('input2');
    let resultText = document.getElementById('resulth2');
    let raiz = Raiz(input1R.value,input2R.value);
    resultText.textContent = raiz;

}

function absolut(Paramone, Paramtwo){
    if (Paramone) {
        let resultAA = Math.abs(Paramone); 
            return resultAA;

    } else if(Paramtwo){
        let resultAB = Math.abs(Paramtwo); 
            return resultAB;
    }
}

function absoluteV() {
    let input1A = document.getElementById('input1');
    let input2A = document.getElementById('input2');
    let textRAbsolute = document.getElementById('resulth2');
    let resultFA = absolut(input1A.value, input2A.value);
    textRAbsolute.textContent = resultFA;
}

function random(param1,paraM2){   
    let resultRan= Math.abs(Math.round(Math.random() * paraM2 - param1 + param1));
    return resultRan;
}

function retornRandom(){
    let input1Ran = document.getElementById('input1');
    let input2Ran = document.getElementById('input2');
    let textRandom = document.getElementById('AleatorioResult');
    let ResultOpRandom = random(input1Ran.value, input2Ran.value);
    textRandom.textContent = ResultOpRandom;
 
}





