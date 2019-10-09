let listaPersonas =[];
//let listaPersonas =New array();
function Persona (nombre, apellido, edad, genero, maneja, nada, bicicleta, pais){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.genero = genero;
this.maneja = maneja;
this.nada = nada;
this.bicicleta = bicicleta;
this.pais = pais;

this.Saludar(){
    console.log("Hola, Soy " + this.nombre +  " " + this.apellido + "y tengo" + this.edad + "años")
}
}



window.addEventListener('load', function(){
    //tres formas de obtener el formulario (manejo de DOM)
    //var frm = this.document.getElementById('frmPersona');
    //var frm = this.document.getElementsByTagName('form')[0];
    var frm = this.document.forms[0];
    console.log(frm);
    frm.addEventListener('submit', manejarSubmit);
});

function manejarSubmit(e){
    //desactivo que la infomacion se vaya a otro lado, en este caso a Google
    e.preventDefault();
    //quien disparo el evento e.target
    var frm = e.target;
    alert("Capture el evento submit");

    let nombre = document.getElementById ('txtNombre').value;
    let apellido = document.getElementById ('txtApellido').value;
    let edad = document.getElementById ('txtEdad').value;
    let genero = document.getElementById ('chkGenero').checked;
    let maneja = document.getElementById ('chkManeja').checked;
    let nada = document.getElementById ( 'chkNada').checked;
    let bicicleta = document.getElementById ('chkBici').checked;
    let pais = document.getElementById ('selPais').value;


    //aca voy a crear una Persona!!!!!!!!!!!!!!
    var nuevaPersona= new Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais);

    console.log(nuevaPersona);

    listasPersonas.push(nuevaPersona);
    //limpiar el fomulario

    console.log(listaPersonas);

    document.getElementById('txtNombre2').value = nuevaPersona.nombre;
    document.getElementById('txtApellido2').value = nuevaPersona.apellido;
    document.getElementById('txtEdad2').value = nuevaPersona.edad;
    if (nuevaPersona.genero = "masculino") {
document.getElementById('rdoMasculino2').checked = true;
    }
else {
    document.getElementById('rdoFemenino2').checked = true;
}
document.getElementById('chkNada2').checked = nuevaPersona.nada;
document.getElementById('chkBici2').checked = nuevaPersona.bicicleta;
document.getElementById('chkManeja2').checked= nuevaPersona.maneja;
document.getElementById('selPais2').value= nuevaPersona.pais;

limpiarFormulario();

}

function limpiarFormulario(){

    document.getElementById('txtNombre').value = "";
    document.getElementById('txtApellido').value = "";
    document.getElementById('txtEdad').value = "";
    if (nuevaPersona.genero = "masculino") {
document.getElementById('rdoMasculino').checked = true;
    }
else {
    document.getElementById('rdoFemenino').checked = true;
}
document.getElementById('chkNada').checked = "";
document.getElementById('chkBici').checked = "";
document.getElementById('chkManeja').checked= "";
document.getElementById('selPais').value= "ar";

}