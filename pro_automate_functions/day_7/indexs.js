function generarContenido() {
    //Crear p
    let creaP = document.createElement('p');
    //Añade texto a p
    creaP.innerText = 'Parrafo 1';

    //crea Input
    let creaInput = document.createElement('input');
    
    //añade atributos a input
    creaInput.setAttribute('type','text');
    creaInput.setAttribute('id','txtcontent');
    
let content = document.getElementById('contenido');

content.appendChild(creaP);
content.appendChild(creaInput);

}