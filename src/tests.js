function checarCipher(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Passou!");
        return true;
    } else {
        console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
        return false;
    }
}

//Caso 1
checarCipher(cifrarCaesar(1, 'z'), 'a');
//Caso 2
checarCipher(decifrarCaesar(1, 'a'), 'z');
//Caso 3
checarCipher(cifrarCaesar(1, 'abcdefghijklmnopqrstuvwxyz'), 'bcdefghijklmnopqrstuvwxyza');
//Caso 4
checarCipher(decifrarCaesar(1, 'bcdefghijklmnopqrstuvwxyza'), 'abcdefghijklmnopqrstuvwxyz');
//Caso 5
checarCipher(cifrarCaesar(-1, 'z'), 'y');
//Caso 6
checarCipher(decifrarCaesar(-1, 'y'), 'z');
//Caso 7
checarCipher(cifrarCaesar(1, 'A'), 'B');
//Caso 8
checarCipher(decifrarCaesar(1, 'B'), 'A');