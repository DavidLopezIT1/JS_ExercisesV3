
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

       for(let item of fetchArray.data){
        if (item.nombre.startsWith(ElementoInput.value)){
            let listItem= document.createElement('li');
            UnorderList.appendChild(listItem);
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
