arrayNotas = [4.5, 1.8, 4.6, 3.7, 3.2, 2.2, 4.9]

function functionmatem(){
            let materia = 'Nota Matematicas : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem = materia + arrayNotas[0];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;

}

function functionsocial(){
            let materia = 'Nota Sociales : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem = materia + arrayNotas[1];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;

}

function functionespan(){
            let materia = 'Nota Español : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem =  materia + arrayNotas[2];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;

}

function functioningles(){
            let materia = 'Nota Inglès : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem =  materia + arrayNotas[3];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;
    
}

function functionbiologia(){
            let materia = 'Nota Biologia : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem =  materia + arrayNotas[4];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;

}
function functionfiloso(){
            let materia = 'Nota Filosofia : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem =  materia + arrayNotas[5];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;

}
function functionquimica(){
            let materia = 'Nota Quimica : ';
            let answer = document.getElementById('ordenatedList'); 
            let notamatem =  materia + arrayNotas[6];
            let crearlista = document.createElement('li');
                crearlista.innerText = notamatem;
                answer.appendChild(crearlista);
                answer.textContent = notamatem;
}
function Todas(){

    for(variableArrayN of arrayNotas ){    
            let answer = document.getElementById('ordenatedList'); 
            let crearlista = document.createElement('li');
                crearlista.innerText = variableArrayN;
                answer.appendChild(crearlista);
}
}

function promedio(){
    let Result2 = 0; 
        for(let elementoP of arrayNotas){
            let VariableControl = 0;
            let answerP = document.getElementById('promedioRes');
            Result2 = Result2 + +elementoP;  
                VariableControl++;
                }if(VariableControl =7){
                        answerP.textContent = Result2 / 7;
                    }  
}

function mostHighNote(){
    let answerHN = document.getElementById('mostHighNoteL');
    let notaMasAlta = 0;
    let controlador = 0;
    while(controlador <=6){
        if(arrayNotas[controlador] > notaMasAlta){
        notaMasAlta= arrayNotas[controlador];
    }
    controlador++;
    }
    answerHN.textContent = notaMasAlta;
}

function materiasAplazadas(){
        let contador =0;
        let contenidoRAplaza = document.getElementById('materias_a_aplazar');
        for(elemento of arrayNotas){
          /*  let result = "error" + elemento;
                contenidoRAplaza.textContent = result;  */
                switch (elemento) {
                        case 1.8: 
                        let result = "Materia Sociales Aplazada, Nota:" + elemento;
                        contenidoRAplaza.textContent = result;
                        break;
                                case 2.2: 
                                let result2 = "Materia Filosofía Aplazada, Nota:" + elemento;
                                contenidoRAplaza.textContent = result2;
                                break;
                }   
        }

}