// function ObtenerInput (param1){
// let marca_Car = document.getElementById('marca1').Value;
// let modelo_car = document.getElementById('modelo1').Value;
// let color_car = document.getElementById('color1').Value;
// let anio_car = document.getElementById('anio1').Value;
// let titular_car = document.getElementById('titular1').Value;

// function extraer(){
//     let nombre = document.getElementById('Nombre').value;
//     let apellido = document.getElementById('Apellido').value;
//     let identificacion = document.getElementById('Identificacion').value;
//     let salario = document.getElementById('Salario').value;
//     let cargo = document.getElementById('Cargo').value;

//     let empleadoNuevo = new createEmplyed(nombre, apellido, identificacion, salario, cargo);    

//     arrayContent.push(empleadoNuevo);
//     alert('Datos Almacenados con Exito')
//     cleanCaracts();

// }
// }

let arrayContent =[];

function automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;

}

// function CreAutomovilI(){ 
//     let marca = document.getElementById('marcaI').Value;
//     let modelo = document.getElementById('modeloI').Value;
//     let color = document.getElementById('colorI').Value;
//     let anio = document.getElementById('anioI').Value;
//     let titular = document.getElementById('titularI').Value;

        let automovilI = new automovil('Chevrolet', 'R156660P', 'Rojo', 2024, 'David Lòpez');
        arrayContent.push(automovilI);
        console.log(automovilI);

    

        // let automovil2 = new Automovil ('porsche', 'carrera 911 S','Negro', 2022 , 'Juan Porsche');
        // let automovil3 = new Automovil ('Buggati', 'Chiron','Azul',2024, 'Ferrucho Buggati');

            automovil.prototype.VenderAutomovil = function(){
                
                alert('Gays');
                
                // nuevoTitular='porsche';
                // this.titular = nuevoTitular;
                    

         }


function alertparaSalidaDatos(){
     let mostrar;
     for(let item of arrayContent){
         for( let itemObject in item){
             mostrar = mostrar + itemObject + ': ' + item[itemObject] + ',' + '\n';
         }
     }
         alert(mostrar);
     }
