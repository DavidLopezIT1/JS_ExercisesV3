// let array = [];

// function ObjetoEmpleados(nombre, cedula, cargo, salario){
//     this.nombre = nombre;
//     this.cedula = cedula;
//     this.cargo = cargo;
//     this.salario = salario;

// }

// function GuardarEmpleado(nombre, cedula, cargo, salario){
//     let array = [];
//     nombre = document.getElementById('nombre');
//     cedula = document.getElementById('cedula');
//     cargo = document.getElementById('cargo');
//     salario = document.getElementById('salario');
    
//     let nuevoEmpleado = new ObjetoEmpleados(nombre, cedula, cargo, salario);
//     alert('Datos Guardados con exito');
//     return nuevoEmpleado;
// }



// function mostratEmpleados(){
//     let genki = GuardarEmpleado(nombre, cedula, cargo, salario);
//     for(let item in genki){
//         alert(item + ' ' + genki[item]);
//     }

// }

// Fase 1 de las pruebas de POO

// let polo = { 
//     marca: 'Lacoste', 
//     color: 'Azul', 
//     talle: 'L', 
//     fabricar() {
//     console.log("Polo fabricado") },

//         agregarPropiedad() {
//         console.log(this.talle);
//     }
// };

// // Fase 2 de las pruebas de POO

// function Automovil(){
//     this.marca = 'Ford';
//     this.modelo = 'Fiesta';
//     this.anio = 2015;

//     this.arrancar = function (){
//     console.log("En marcha");
    
// }
    
// }

// Fase  de las pruebas de POO, objeto y backTig

// function ListaEmpleados(nombre, cedula, cargo, salario){
//     this.nombre = nombre;
//     this.cedula = cedula;
//     this.cargo = cargo;
//     this.salario = salario;

//     this.Presenta = function(){
//     console.log(`mi nombre es ${this.nombre}, con cedula de ciudadanìa ${this.cedula}, 
//     mi cargo es ${this.cargo}, y mi salario es ${this.salario} `);
// }
// }
// let camilo = new ListaEmpleados('camilo',1101298962, 'Gerente de operaciones', 50000000);


let arrayEmpleadoCaracters=[];
let empleadoIncremental;

function AgregarEmpleado(nombre, apellido, identificacion, salario, cargo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.identificacion=identificacion;
    this.salario=salario;
    this.cargo=cargo;
}

function getValues(){

    let mostrarEmpleados= document.getElementById('MostrarEmpleados'); 
    let nombre = document.getElementById('Nombre');
    let apellido = document.getElementById('Apellido');
    let identificacion = document.getElementById('Identificación');
    let salario = document.getElementById('Salario');
    let cargo = document.getElementById('Cargo');

    empleadoIncremental = new AgregarEmpleado(nombre.value, apellido.value, identificacion.value, salario.value, cargo.value);
    
    // typeof cadena === "string" && cadena.length === 0

                if(nombre.value && apellido.value && identificacion.value && salario.value && cargo.value ){
                    alert('Datos Guardados con Exito');
                }else{
                    alert('Datos Incompletos, Verifique');
                }
    
    
// for(let item in empleadoIncremental){
//         let crearElementos= document.createElement('li');
//         crearElementos.innerText = item + ' : ' + empleadoIncremental[item];

//         mostrarEmpleados.appendChild(crearElementos);
        
// }

            arrayContent(empleadoIncremental);
    

}

function alertparaSalidaDatos(  ){


    let mostrarEmpleados= document.getElementById('MostrarEmpleados'); 

        for(let item in empleadoIncremental){
        let crearElementos= document.createElement('li');
        let spaceCreator = document.createElement('br');
        crearElementos.innerText = item + ' : ' + empleadoIncremental[item];
        mostrarEmpleados.appendChild(crearElementos);
        // alert(crearElementos);
        
}

}


function arrayContent(param1){
    let controlador = 0;
    
    for (let item in param1) {

        if(controlador<10){

            if(param1[4]){
                controlador=4
            
            arrayEmpleadoCaracters[controlador]=item;
        }
        }


    }


}