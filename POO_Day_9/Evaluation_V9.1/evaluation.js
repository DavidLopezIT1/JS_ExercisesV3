let arrayContent =[];

function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
    
}

function CreAutomovilI(){ 
    let marcaCar = document.getElementById('marcaI').value;
    let modelCar = document.getElementById('modeloI').value;
    let colorCar = document.getElementById('colorI').value;
    let anioCar = document.getElementById('anioI').value;
    // let titularCar = document.getElementById('titularI').value;
    
    let automovilI = new Automovil(marcaCar, modelCar, colorCar, anioCar, 'David L');
        arrayContent.push(automovilI);
        console.log(automovilI);


 }       
    
 function CreAutomovilII(){ 
    let marcaCar = document.getElementById('marcaII').value;
    let modelCar = document.getElementById('modeloII').value;
    let colorCar = document.getElementById('colorII').value;
    let anioCar = document.getElementById('anioII').value;
    // let titularCar = document.getElementById('titularII').value;
    
    let automovilII = new Automovil(marcaCar, modelCar, colorCar, anioCar, 'Juan L');
        arrayContent.push(automovilII);
        console.log(automovilII);


 }  

 function CreAutomovilIII(){ 
    let marcaCar = document.getElementById('marcaIII').value;
    let modelCar = document.getElementById('modeloIII').value;
    let colorCar = document.getElementById('colorIII').value;
    let anioCar = document.getElementById('anioIII').value;
    // let titularCar = document.getElementById('titularIII').value;
    
    let automovilIII = new Automovil(marcaCar, modelCar, colorCar, anioCar, 'Olga O');
        arrayContent.push(automovilIII);
        console.log(automovilIII);


 }



function SalidaDatos(){

    let ValorDiv = document.getElementById('Salida');
    // let crea = document.createElement('li');
    // let content = param1 + param2 ; 
    // crea.innerText = content;
    
    // ValorDiv.appendChild(crea);

    for(let item of arrayContent){
        for(let items in item){ 
        let crea = document.createElement('li');
        
        crea.innerText = items + ' : ' + item[items] + '\n\n';
        
        ValorDiv.appendChild(crea );
    }
    }
}
