let array;

function rellenarEspacios() {

    fetch('descr.json')
    .then(promesa => promesa.json())
    .then((salida) => {
        array = salida;
                let Nombres= document.getElementById('Nombre');
                let Edad = document.getElementById('Edad');
                let Años_de_Experiencia= document.getElementById('Años_de_Experiencia');
                let Experiencias_Laborales= document.getElementById('Experiencias_Laborales');
                let Nivel_Estudios= document.getElementById('Nivel_Estudios');
                let Estudios_Certificados = document.getElementById('Estudios_Certificados');
                let Tecnologias= document.getElementById('Tecnologias');
                let Habilidades= document.getElementById('Habilidades');

                    let StrongNombre = document.createElement('strong');
                    Nombres.appendChild(StrongNombre);
                    StrongNombre.textContent = array.Nombre;

                        let StrongEdad = document.createElement('strong');
                        Edad.appendChild(StrongEdad);
                        StrongEdad.textContent = array.Edad;

                            let StrongAñosdeExperiencia  = document.createElement('strong');
                            Años_de_Experiencia.appendChild(StrongAñosdeExperiencia);
                            StrongAñosdeExperiencia.textContent = array.Años_de_Experiencia;

                                let StrongExperiences  = document.createElement('strong');
                                let SpaceContent = document.createElement('br');
                                Experiencias_Laborales.appendChild(StrongExperiences);

                                StrongExperiences.textContent=array.Experiencias_Laborales[0].Compañia + ' como : ' + 
                                array.Experiencias_Laborales[0].Cargo + ', Tuve : ' + array.Experiencias_Laborales[0].Ascensos + ' Ascenso, ' +
                                ' el cual fué : ' + array.Experiencias_Laborales[0].Nombre_Cargo_del_Ascenso ;
                                
                                StrongExperiences.appendChild(SpaceContent);
                                StrongExperiences.appendChild(SpaceContent);

                                StrongExperiences  = document.createElement('strong');
                                SpaceContent = document.createElement('br');
                                Experiencias_Laborales.appendChild(StrongExperiences);

                                StrongExperiences.textContent=array.Experiencias_Laborales[1].Compañia + ' como : ' + 
                                array.Experiencias_Laborales[1].Cargo + ', Tuve : ' + array.Experiencias_Laborales[1].Ascensos + ' Ascensos, ' +
                                ' los cuales fueron : ' + array.Experiencias_Laborales[1].Nombre_Cargo_del_Ascenso +', ' +
                                array.Experiencias_Laborales[1].Nombre_Cargo_del_Ascenso_2 + ' y ' +
                                array.Experiencias_Laborales[1].Nombre_Cargo_del_Ascenso_3;

                                    let StrongNivelEstudios  = document.createElement('strong');
                                    Nivel_Estudios.appendChild(StrongNivelEstudios);
                                    StrongNivelEstudios.textContent = array.Nivel_Estudios;

                                        let StrongEstudios_Certificados = document.createElement('strong');
                                        let SpaceContent2 = document.createElement('br');
                                        Estudios_Certificados.appendChild(StrongEstudios_Certificados);

                                        StrongEstudios_Certificados.textContent = array.Estudios[0].Nombre_Entidad_Educativa + ' -- ' +
                                        array.Estudios[0].Nombre_Titulo_Alcanzado;

                                        StrongEstudios_Certificados.appendChild(SpaceContent2);
                                        StrongEstudios_Certificados.appendChild(SpaceContent2);

                                        StrongEstudios_Certificados = document.createElement('strong');
                                        SpaceContent2 = document.createElement('br');
                                        Estudios_Certificados.appendChild(StrongEstudios_Certificados);

                                        StrongEstudios_Certificados.textContent = array.Estudios[1].Nombre_Entidad_Educativa2 + ' -- ' +
                                        array.Estudios[1].Nombre_Titulo_Alcanzado2;
                                        

                                        StrongEstudios_Certificados.appendChild(SpaceContent2);
                                        StrongEstudios_Certificados.appendChild(SpaceContent2);

                                        StrongEstudios_Certificados = document.createElement('strong');
                                        SpaceContent2 = document.createElement('br');
                                        Estudios_Certificados.appendChild(StrongEstudios_Certificados);

                                        StrongEstudios_Certificados.textContent = array.Estudios[2].Nombre_Entidad_Educativa3 + ' -- ' +
                                        array.Estudios[2].Nombre_Titulo_Alcanzado3;
                                        

                                        StrongEstudios_Certificados.appendChild(SpaceContent2);
                                        StrongEstudios_Certificados.appendChild(SpaceContent2);

                                        StrongEstudios_Certificados = document.createElement('strong');
                                        SpaceContent2 = document.createElement('br');
                                        Estudios_Certificados.appendChild(StrongEstudios_Certificados);

                                        StrongEstudios_Certificados.textContent = array.Estudios[3].Nombre_Entidad_Educativa4 + ' -- ' +
                                        array.Estudios[3].Nombre_Titulo_Alcanzado4 + ', ' + array.Estudios[3].Nombre_Titulo_Alcanzado4_2;
                                        StrongEstudios_Certificados.appendChild(SpaceContent2);

                                        StrongEstudios_Certificados = document.createElement('strong');
                                        SpaceContent2 = document.createElement('br');
                                        Estudios_Certificados.appendChild(StrongEstudios_Certificados);
                                        
                                        StrongEstudios_Certificados.textContent = array.Estudios[4].Nombre_Entidad_Educativa5 + ' -- ' +
                                        array.Estudios[4].Nombre_Titulo_Alcanzado5;
                                        Estudios_Certificados.appendChild(SpaceContent2);


                                            let StrongTecnologias  = document.createElement('strong');
                                            let SpaceContent3 = document.createElement('br');
                                            Tecnologias.appendChild(StrongTecnologias);


                                                let StrongHabilidades  = document.createElement('strong');








    }).catch(function(error){ alert(error)})

}