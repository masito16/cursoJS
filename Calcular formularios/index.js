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

    //aca voy a crear una Persona!!!!!!!!!!!!!!
    var nuevaPersona= new Persona();

    listasPersonas.push(nuevaPersona);
    //limpiar el fomulario
}
