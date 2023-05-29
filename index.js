
/*funcion para seleccionar texto del textarea para encriptarlo*/
function encriptar_Texto() {
    var textarea = document.querySelector("#txttextarea");
    var texto = textarea.value;
    /*se comprueba que el campo del textarea no este vacio, si es asi se ejecuta el codigo*/
    if(texto!=""){
      /*este codigo es para reemplazar las vocales por la palabras definidas*/
      texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    /*seleccionamos el objeto html para poder mostrar en el el texto alterado*/
    var resultado=document.querySelector("#mostrartexto");
    resultado.innerHTML=texto;
    remplazar();

    }
    /*si el campo esta vacio se ejecuta esa funcion*/
    else{
      normal();
    }

    
    
    
  }
  /*se selecciona el objeto button "encriptar" y se le indica que ejecute la funcion encriptar_texto al darle click*/
  var btnEncriptar = document.querySelector("#btnencriptar");
  btnEncriptar.addEventListener("click", encriptar_Texto);

/*funcion para seleccionar texto del textarea para desencriptarlo*/
  function desencriptar_Texto() {
    var textarea = document.querySelector("#txttextarea");
    var texto = textarea.value;
    /*se comprueba que el campo del textarea no este vacio, si es asi se ejecuta el codigo*/
    if(texto!=""){
      /*este codigo es para regresar el texto a valores normales*/
      texto = texto.replace(/ai/g, "a");
      texto = texto.replace(/enter/g, "e");
      texto = texto.replace(/imes/g, "i");
      texto = texto.replace(/ober/g, "o");
      texto = texto.replace(/ufat/g, "u");

      /*seleccionamos el objeto html para poder mostrar en el el texto*/
      var resultado=document.querySelector("#mostrartexto");
      resultado.innerHTML=texto;
      remplazar();


    }
    else{
       /*si el campo esta vacio se ejecuta esa funcion*/
      normal();
    }
 
   
  }

   /*se selecciona el objeto button "desencriptar" y se le indica que ejecute la funcion encriptar_texto al darle click*/
  var btnDesencriptar = document.querySelector("#btndesencriptar");
  btnDesencriptar.addEventListener("click", desencriptar_Texto, remplazar);


/*se selecciona los objetos por su id para ocultar la imagen por defecto y solo mostrar el texto obtenido del textarea*/
  function remplazar(){
   document.getElementById('mostrartexto').style.display='block';
   document.getElementById('salidaEncriptador').style.display='block'
  
    document.getElementById('salidaimg').style.display='none';
    document.getElementById("txttextarea").value = "";
}

/*se selecciona los objetos por su id para mostrar la imagen por defecto */
function normal(){
  document.getElementById('salidaEncriptador').style.display='none'
  document.getElementById('salidaimg').style.display='block'
}

/*funcion que obtiene el texto del objeto con id mostrartexto para agragarlo al portapapeles*/
function copiarContenido() {
  var contenido = document.getElementById("mostrartexto").innerHTML;
  var textarea = document.createElement("textarea");
  textarea.value = contenido;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Contenido copiado al portapapeles");}


