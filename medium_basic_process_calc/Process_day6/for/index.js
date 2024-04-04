
function testLoop() {
    


    for (x = 1; x <=10; x++) {
        let VariableUsuario = document.getElementById('inputNumber').value;
        let contador= Number(VariableUsuario);
        let uln = document.getElementById('UnorderList');
       let documentwrite = contador + ' * ' + x + ' = ' + (x * contador);
       let crearLista = document.createElement('li');

       crearLista.innerText = documentwrite;

       uln.appendChild(crearLista);


        
    }
    }

    function reloo(){

        location.reload();
    }

