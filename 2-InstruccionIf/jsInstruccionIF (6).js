function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

if (edad < 13){ 
    alert("Niño");
}
else if (edad <17) {
alert ("Adolescente");

}
else if (edad >17) {
alert ("Adulto");

}

}//FIN DE LA FUNCIÓN