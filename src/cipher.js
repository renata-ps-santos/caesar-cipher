function msgResult() { return document.getElementById("box4") }
function imageLock() { return document.getElementById("image-secret") }

function encodeCaesar(offset, string) {
  let ascii = 0
  let newString = ''
  let character = ''
  for (let i = 0; i < string.length; i++) {
    character = string[i]
    ascii = character.charCodeAt()
    if(ascii >= 65 && ascii <= 90){
      character = String.fromCharCode(((ascii - 65 + (offset%26)+26) % 26) + 65)
      newString += character
    }else if(ascii >= 97 && ascii <= 122){
      character = String.fromCharCode(((ascii - 97 + (offset%26)+26) % 26) + 97)
      newString += character
    }else{
      newString += String.fromCharCode(ascii)
    }
  }return newString
}
function decodeCaesar(offset, string) {
  let ascii = 0
  let newString = ''
  let character = ''
  for (let i = 0; i < string.length; i++) {
    character = string[i]
    ascii = character.charCodeAt()
    if(ascii >= 65 && ascii <= 90){
      character = String.fromCharCode(((ascii - 65 - (offset%26)+26) % 26) + 65)
      newString += character
    }else if(ascii >= 97 && ascii <= 122){
      character = String.fromCharCode(((ascii - 97 - (offset%26)+26) % 26) + 97)
      newString += character
    }else{
      newString += String.fromCharCode(ascii)
    }
  }return newString
}
function encode() {
  const offset = document.getElementById("secret-key").value
  const string = document.getElementById("secret").value
  const encode = encodeCaesar(Number(offset), string)
  if (offset !== '' && string !== '') {
    document.getElementById("result").innerHTML = encode
    document.getElementById("secret").value = ""
    document.getElementById("secret-key").value = ""
    imageLock().classList.add('hide')
    msgResult().classList.remove('hide')
  } else {
    alert('Preencha os campos corretamente')
  }
}
function decode() {
  const offset = document.getElementById("secret-key").value
  const string = document.getElementById("secret").value
  const decode = decodeCaesar(Number(offset), string)
  if (offset !== '' && string !== '') {
    document.getElementById("result").innerHTML = decode
    document.getElementById("secret").value = ""
    document.getElementById("secret-key").value = ""
    imageLock().classList.add('hide')
    msgResult().classList.remove('hide')
  } else {
    alert('Preencha os campos corretamente')
  }
}
