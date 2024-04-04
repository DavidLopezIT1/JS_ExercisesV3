// {} []





let arrayContent =[];

function createEmplyed(nombre, apellido, identificacion, salario, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.identificacion = identificacion;
    this.salario = salario;
    this.cargo = cargo;

}

function extraer(){
    let nombre = document.getElementById('Nombre').value;
    let apellido = document.getElementById('Apellido').value;
    let identificacion = document.getElementById('Identificacion').value;
    let salario = document.getElementById('Salario').value;
    let cargo = document.getElementById('Cargo').value;

    let empleadoNuevo = new createEmplyed(nombre, apellido, identificacion, salario, cargo);    

    arrayContent.push(empleadoNuevo);
    alert('Datos Almacenados con Exito')
    cleanCaracts();

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

function cleanCaracts(){

    document.getElementById('Nombre').value = '';
    document.getElementById('Apellido').value = '';
    document.getElementById('Identificacion').value = '';
    document.getElementById('Salario').value = '';
    document.getElementById('Cargo').value = ''

}

