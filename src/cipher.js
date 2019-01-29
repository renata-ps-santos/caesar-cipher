function mensagemResult() { return document.getElementById("caixa4") }
function imagem() {return document.getElementById("imagem-segredo") }


function cifrarCaesar(offset, string){
  var ascii = 0
var fraseNova = ''
var caracter = ''

  for(var i = 0; i < string.length; i++){
  caracter = string[i]
  ascii = caracter.charCodeAt()
  if(ascii >= 65 && ascii <= 90){
    caracter = String.fromCharCode(((ascii - 65 + (offset%26)+26) % 26) + 65)
    fraseNova += caracter
  }else if(ascii >= 97 && ascii <= 122){
    caracter = String.fromCharCode(((ascii - 97 + (offset%26)+26) % 26) + 97)
    fraseNova += caracter
  } else{
    fraseNova += String.fromCharCode(ascii)
  }
  }
  return fraseNova  
}
function decifrarCaesar(offset, string){
  var ascii = 0
var fraseNova = ''
var caracter = ''

  for(var i = 0; i < string.length; i++){
    caracter = string[i]
    ascii = caracter.charCodeAt()
    if(ascii >= 65 && ascii <= 90){
      caracter = String.fromCharCode(((ascii - 65 - (offset%26)+26) % 26) + 65)
      fraseNova += caracter
    }else if(ascii >= 97 && ascii <= 122){
      caracter = String.fromCharCode(((ascii - 97 - (offset%26)+26) % 26) + 97)
      fraseNova += caracter
    }else{
      fraseNova += String.fromCharCode(ascii)
    }
    }
    return fraseNova 
}


function encode(){
  const offset = document.getElementById("chave-secreta").value
  const string = document.getElementById("segredo").value
  const cifrado = cifrarCaesar(Number(offset), string)
  if(offset !== '' && string !== ''){

  document.getElementById("resultado").innerHTML = cifrado
  fraseNova = ''
  document.getElementById("segredo").value=""
  document.getElementById("chave-secreta").value=""
  imagem.classList.add('hide')
  mensagemResult().classList.remove('hide')
}
}
function decode(){
  const offset = document.getElementById("chave-secreta").value
  const string = document.getElementById("segredo").value
  const decifrado = decifrarCaesar(Number(offset), string)
  if(offset !== '' && string !== ''){
  document.getElementById("resultado").innerHTML = decifrado
  fraseNova = ''
  document.getElementById("segredo").value=""
  document.getElementById("chave-secreta").value=""
  imagem.classList.add('hide')
  mensagemResult().classList.remove('hide')
}

}