var mensagemResultado = document.getElementById("caixa4")
var imagem = document.getElementById("imagem-segredo")
var ascii = 0
var fraseNova = ''
var caracter = ''
  
function cifrarCaesar(offset, string){
  offset = parseInt(offset)
  for(var i = 0; i < string.length; i++){
  caracter = string[i]
  ascii = caracter.charCodeAt()
  caracter = String.fromCharCode(((ascii - 32 + (offset%223)+223) % 223) + 32)
  fraseNova += caracter
  }
  return fraseNova  
}
function decifrarCaesar(offset, string){
  offset = parseInt(offset)
  for(var i = 0; i < string.length; i++){
    caracter = string[i]
    ascii = caracter.charCodeAt()
    caracter = String.fromCharCode(((ascii - 32 - (offset%223)+223) % 223) + 32)
    fraseNova += caracter
  }
  return fraseNova
}
function encode(){
  const offset = document.getElementById("chave-secreta").value
  const string = document.getElementById("segredo").value
  const cifrado = cifrarCaesar(offset, string)
  
  document.getElementById("resultado").innerHTML = cifrado
  fraseNova = ''
  document.getElementById("segredo").value=""
  document.getElementById("chave-secreta").value=""
  imagem.classList.add('hide')
  mensagemResultado.classList.remove('hide')
}
function decode(){
  const offset = document.getElementById("chave-secreta").value
  const string = document.getElementById("segredo").value
  const decifrado = decifrarCaesar(offset, string)
  
  document.getElementById("resultado").innerHTML = decifrado
  fraseNova = ''
  document.getElementById("segredo").value=""
  document.getElementById("chave-secreta").value=""
  imagem.classList.add('hide')
  mensagemResultado.classList.remove('hide')
}
