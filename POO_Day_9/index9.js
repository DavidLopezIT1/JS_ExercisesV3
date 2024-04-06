// function ObtenerInput (param1){
// let marca_Car = document.getElementById('marca1').Value;
// let modelo_car = document.getElementById('modelo1').Value;
// let color_car = document.getElementById('color1').Value;
// let anio_car = document.getElementById('anio1').Value;
// let titular_car = document.getElementById('titular1').Value;
// }

let arrayContent =[];

function automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
    

}

function CreAutomovilI(){ 
    let marcaCar = document.getElementById('marcaI').Value;
    let modelocar = document.getElementById('modeloI').Value;
    let colorcar = document.getElementById('colorI').Value;
    let aniocar = document.getElementById('anioI').Value;
    let titularcar = document.getElementById('titularI').Value;

        let automovil1 = new automovil(marcaCar, modelocar, colorcar, aniocar, titularcar);
        arrayContent.push(automovil1);

        console.log(automovil1);

    }

        // let automovil2 = new Automovil ('porsche', 'carrera 911 S','Negro', 2022 , 'Juan Porsche');
        // let automovil3 = new Automovil ('Buggati', 'Chiron','Azul',2024, 'Ferrucho Buggati');

        // Automovil.prototype.VenderAutomovil= function(nuevoTitular){
        //         nuevoTitular = this.titular;
        // }


function alertparaSalidaDatos(){
     let mostrar;
     for(let item of arrayContent){
         for( let itemObject in item){
             mostrar = mostrar + itemObject + ': ' + item[itemObject] + ',' + '\n';
         }
     }
         alert(mostrar);
     }