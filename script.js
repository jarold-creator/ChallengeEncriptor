//funcion para mostrar la imagen en el txtarea
function mostarImagen() {
    //codigo
}

//funcion para encriptar mensajes boton Encriptar
function encriptar() {
    var frase = document.getElementById("txtcifrar").value.toLowerCase();
    
    var txtencriptado = frase.replace(/e/img, "enter");
    var txtencriptado = txtencriptado.replace(/o/img, "ober");
    var txtencriptado = txtencriptado.replace(/i/img, "imes");
    var txtencriptado = txtencriptado.replace(/a/img, "ai"); 
    var txtencriptado = txtencriptado.replace(/u/img, "ufat"); 
    
    document.getElementById("txtdescifrado").innerHTML = txtencriptado;
    //para que se muestre el boton copiar
    document.getElementById("btncopiar").style.display = "show";
    document.getElementById("btncopiar").style.display = "inherit";
    //ocultar la imagen
    document.getElementById("parrafo1").style.display = "none"
}

//funcion para encriptar mensajes boton Desencriptar
function desencriptar() {
    var frase = document.getElementById("txtcifrar").value.toLowerCase();
       
    var txtencriptado = frase.replace(/enter/img, "e");
    var txtencriptado = txtencriptado.replace(/ober/img, "o");
    var txtencriptado = txtencriptado.replace(/imes/img, "i");
    var txtencriptado = txtencriptado.replace(/ai/img, "a"); 
    var txtencriptado = txtencriptado.replace(/ufat/img, "u");

    document.getElementById("txtdescifrado").innerHTML = txtencriptado;
}

//funcion para boton copiar
function copiar() {
    //guardamos el contenido del txtarea por el id en la variable contenido
    var contenido = document.querySelector("#txtdescifrado");
    //seleccionamos el valor
    contenido.select();
    //ejecutamos el comando copiar 
    document.execCommand("copy");
    Swal.fire({
        title:'Texto Copiado ... ',       
        icon: 'success',
        width: '30%',
        timer: '5000',        
    });    
}

//llamado a las funciones
  //boton Encriptar ejecuta la funcion encriptar
  var btnencriptar = document.querySelector("#btnencriptado");
  btnencriptar.onclick = encriptar;

  //boton Desencriptar ejecuta la funcion desencriptar
  var btndesencriptar = document.querySelector("#btndesencriptado");
  btndesencriptar.onclick = desencriptar;

  //boton Copiar ejecuta la funcion copiar
  var btnCopy = document.querySelector("#btncopiar");
  btnCopy.onclick = copiar; 