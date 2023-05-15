const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//la letra "e" es convertida para "enter"
//la letra "i" es convertida para "imes"
//la letra "a" es convertida para "ai"
//la letra "o" es convertida para "ober"
//la letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] ,matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}    

function btnCopiar() {
    let texto = document.getElementById("mensaje").value.trim();
    if (!texto) {
      return;
    }
    copiarAlPortapapeles();
  }

  function copiarAlPortapapeles() {
    let texto = document.getElementById("mensaje").value;
  
    if (texto.trim() === "") {
      return;
    }
  
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        mostrarNotificacion("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el texto: ", error);
      });
  }
  
  const pegar = document.getElementById("pegar");
  pegar.addEventListener("click", function (event) {
    event.preventDefault();
    navigator.clipboard
    .readText()
    .then((texto) => {
        document.getElementById("mensaje").value = texto;
        mostrarOcultarDivs();
        mostrarNotificacion("Texto pegado correctamente");
    })
    .catch((error) => {
        mostrarNotificacion("Error al pegar el texto: " + error);
    });
});      