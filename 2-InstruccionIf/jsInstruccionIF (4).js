function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;

edad= parseInt(edad);
//if (edad >= 13 &&. edad <=17)
if ( !(edad < 13 || edad > 17)) { 

    alert ("Es Adolescente");
}

}//FIN DE LA FUNCIÓN