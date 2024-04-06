
// Creación de clase Prototipica.
class Animal{

    constructor(animal, nombre, peso, edad){
        this.animal = animal;
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;

        this.informacion = function(){
            //Crear funcion para heredarla a las subclases
            let content = 'este animal es un ' + this.animal + ', Se llama ' + 
           this.nombre + ', su peso es de ' + this.peso + ' y su edad es ' + this.edad + ' Años';
            
           return alert(content);
        }
    }
}

class perro extends Animal{
    constructor(animal, nombre, peso, edad, raza){
        super(animal, nombre, peso, edad, );
        this.raza = raza;

        this.informacion = function(){
            //Crear funcion para heredarla a las subclases
            let content = 'este animal es un ' + this.animal + ', Se llama ' + 
           this.nombre + ', su peso es de ' + this.peso + ', su edad es ' + this.edad + 
           ' Años y su raza es ' + this.raza;
            
           return alert(content);
    }
    }
}
class gato extends Animal{
    constructor(animal, nombre, peso, edad, sexo){
        super(animal, nombre, peso, edad );
        this.sexo = sexo;

        this.informacion = function(){
            //Crear funcion para heredarla a las subclases
            let content = 'este animal es un ' + this.animal + ', Se llama ' + 
           this.nombre + ', su peso es de ' + this.peso + ', su edad es ' + this.edad + 
           ' Años y su sexo es ' + this.sexo;
            
           return alert(content);
    }
    }
}
class conejo extends Animal{
    constructor(animal, nombre, peso, edad, color){
        super(animal, nombre, peso, edad, );
        this.color = color;
        
        this.informacion = function(){
            //Crear funcion para heredarla a las subclases
            let content = 'este animal es un ' + this.animal + ', Se llama ' + 
           this.nombre + ', su peso es de ' + this.peso + ', su edad es ' + this.edad + 
           ' Años y su color es ' + this.color;
            
           return alert(content);
    }
    }
}

let perroW = new perro ('Perro', 'Max', '70 KG', 6, 'Chaw Chaw');
let gatoW = new gato ('Gato', 'Oriona', '23 KG', 11, 'Hembra');
let conejoW = new conejo ('Conejo', 'kimber', '16 KG', 3, 'Blanco');
let arrayContent = [perroW, gatoW, conejoW];

function resultContent() {

    let contentR = document.getElementById('AnimalContainer');

    for( let mascotaInd of arrayContent){
        for (let mascota in mascotaInd) {
            let CreateElem = document.createElement('li');
            let Strong = document.createElement('strong');
            
            CreateElem.innerText = mascota + ': ' + mascotaInd[mascota];
            contentR.appendChild(CreateElem);
                
            }
        }

    }
                

