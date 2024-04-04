/// Funcion Validaciòn de edades para anidar a otras funciones con condicionales para generaciòn de validaciòn

function Comedi(edadUsuario){
    let valueAge;
        if (edadUsuario >=13 && edadUsuario <=15){         
        return valueAge = 'Entre 13 y 15 años';
    } else if (edadUsuario >=16) {
        return valueAge = 'Mayor de 16 años';
    }else if(edadUsuario <13){
        return valueAge = 'Menor de 13 años';
    }

    }

/// Funciones anidando otras funciones con condicionales para generaciòn de validaciòn

function mostrarCrimen(){
    let edadUsuario = document.getElementById('edadUser').value;
    let textInputContent1 = document.getElementById('textAnswer');
    let funcionComedia = Comedi(edadUsuario);

    let Crimen13_15 = 'El secreto de sus ojos';
    let CrimenM16 = 'The Godfather';
    let CrimenATP = 'Lo sentimos!, NO hay peliculas disponibles para tu edad, por favor preba otros Generos.';

    switch (funcionComedia) {
        
        case 'Entre 13 y 15 años':
        textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + Crimen13_15;      
            break;

                case 'Mayor de 16 años':
                textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + CrimenM16;      
                break;

                    case 'Menor de 13 años':
                    textInputContent1.textContent = ' '  + CrimenATP;      
                    break;
            }

}

/// Funciones anidando otras funciones con condicionales para generaciòn de validaciòn

function mostrarComedias(){
    let edadUsuario = document.getElementById('edadUser').value;
    let textInputContent1 = document.getElementById('textAnswer');
    let funcionComedia = Comedi(edadUsuario);

    let comedi13_15 = 'Back to the Future y The Truman Show';
    let comediM16 = 'Back to the Future y The Wolf of Wall Street';
    let comediATP = 'Back to the Future';

    switch (funcionComedia) {
        
        case 'Entre 13 y 15 años':
        textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + comedi13_15;      
            break;

                case 'Mayor de 16 años':
                textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + comediM16;      
                break;

                    case 'Menor de 13 años':
                    textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + comediATP;      
                    break;
            }

}

/// Funciones anidando otras funciones con condicionales para generaciòn de validaciòn

function mostrarDrama(){
    let edadUsuario = document.getElementById('edadUser').value;
    let textInputContent1 = document.getElementById('textAnswer');
    let funcionComedia = Comedi(edadUsuario);

    let Drama13_15 = 'The Shawshank Redemption y Casablanca';
    let DramaM16 = 'Taxi Driver y Casablanca';
    let DramaATP = 'Casablanca';

    switch (funcionComedia) {
        
        case 'Entre 13 y 15 años':
        textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + Drama13_15;      
            break;

                case 'Mayor de 16 años':
                textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + DramaM16;      
                break;

                    case 'Menor de 13 años':
                    textInputContent1.textContent = ' '  + DramaATP;      
                    break;
            }

}

/// Funciones anidando otras funciones con condicionales para generaciòn de validaciòn

function mostrarMusical(){
    let edadUsuario = document.getElementById('edadUser').value;
    let textInputContent1 = document.getElementById('textAnswer');
    let funcionComedia = Comedi(edadUsuario);

    let Musical13_15 = 'Les Miserables y La La Land';
    let MusicalM16 = 'The Rocky Horror Picture Show y La La Land';
    let MusicalATP = 'La La Land';

    switch (funcionComedia) {
        
        case 'Entre 13 y 15 años':
        textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + Musical13_15;      
            break;

                case 'Mayor de 16 años':
                textInputContent1.textContent = 'Tu edad es ' + edadUsuario + ' para lo cual te recomendamos las peliculas: '  + MusicalM16;      
                break;

                    case 'Menor de 13 años':
                    textInputContent1.textContent = ' '  + MusicalATP;      
                    break;
            }

}


