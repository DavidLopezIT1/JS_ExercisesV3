
// Generar Variables para obtener los datos de los elementos 
// que interactuan en el flujo

let selector = document.getElementById('Selector');
let ElementoInput = document.getElementById('Buscador');
let butonB = document.getElementById('butonB');
let UnorderList = document.getElementById('UnorderList');
let limpiarCampos = document.getElementById('limpiarCampos');

// Generar el discriminador del input para los datos numericos

function verificarNumero(evento){
    if(evento.key >= 33 || evento.key <= 57){
        evento.preventDefault();
    }
}

// Generar el evento para el uso de la funcion verificadora

ElementoInput.addEventListener('keydown', verificarNumero);

// Añadir un evento para entender los cambios del selector y utilizar una funcion

selector.addEventListener('change', CambioDeArchivo)

// Funcion Utilizada para entender el archivo utilizado dentro de las 
// posibilidades del usuario, entre peliculas o series
// Esto se muestra en un alert('')

function CambioDeArchivo() {

    switch (selector.value) {
            case 'series.json':
            alert('Archivo base => series.json');
            break;
                case 'peliculas.json':
                alert('Archivo base => peliculas.json');
                break;
    }
}

// Evento encargado de vigilar la acción del boton
butonB.addEventListener('click', buscar);

// Variable Vacía para ocupar el lugar del output
let fetchArray;

// Funcion para buscar el contenido

function buscar(){

    fetch(selector.value).then(promises => promises.json()).then((salida) =>{
        fetchArray=salida;

// Generar la estructura ciclica para iterar el array con los valores del Json
// Este array NO será iterable hasta que se le asigne el valor (.data), porque este es el indice 
// o nombre de la etiqueta que contiene el objeto tipo arreglo dentro del archivo Json

       for(let item of fetchArray.data){

// Generar una estructura condicional que permita indicar si el valor de un elemento, en este caso
// el valor del elemento Input del html coincide con el de alguno de los valores del array iterado
// utilizando la funcion startsWith()

        if (item.nombre.startsWith(ElementoInput.value)){

// Generar una nueva variable que cree los elementos de list item
            let listItem= document.createElement('li');

// Añadir el list item al UL del cual ya obtuvimos el GetElementById('');
            UnorderList.appendChild(listItem);

// Darle valor al item list creado y añadido al ul
            listItem.innerText = item.nombre;
        }
       }
     });
    }

    // limpiar Campos

    limpiarCampos.addEventListener("click", (_) => {
        // el _ es para indicar la ausencia de parametros
        location.reload();
      });
