var nombre;
var apellido;
var edad;
var email;
var usuario;
var contrasena;
function login(){
    var luser = document.getElementById("user").value;
    var lcontrasena = document.getElementById("pass").value;
    if(luser == usuario && lcontrasena == contrasena){
        swal("Login", "Bienvenido!" + nombre + " "+ apellido, "success");  
    }else{
        swal("Login", "Datos incorrectos!", "warning");
    }
        


}

function Registro(){
    var rcontrasena= document.getElementById("password").value;
    var ccontrasena= document.getElementById("cpassword").value;
    if(rcontrasena == ccontrasena) {
     nombre= document.getElementById("nombre").value;
     apellido= document.getElementById("apellido").value;
     edad= document.getElementById("edad").value;
     email= document.getElementById("email").value;
     usuario= document.getElementById("usuario").value;
     contrasena= document.getElementById("password").value;
    
     swal("Registro", "Los datos fueron registrados con éxito!", "success");

     document.getElementById("nombre").value = "";
     document.getElementById("apellido").value = "";
     document.getElementById("edad").value = "";
     document.getElementById("email").value = "";
     document.getElementById("usuario").value = "";
     document.getElementById("password").value = "";
     document.getElementById("cpassword").value = "";
    }else{
        swal("Registro", "Los datos no fueron registrados correctamente, revisa las contraseñas!", "error");

    }
    


}