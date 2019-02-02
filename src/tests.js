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
checarCipher(encodeCaesar(1, 'z'), 'a');
//Caso 2
checarCipher(decodeCaesar(1, 'a'), 'z');
//Caso 3
checarCipher(encodeCaesar(1, 'abcdefghijklmnopqrstuvwxyz'), 'bcdefghijklmnopqrstuvwxyza');
//Caso 4
checarCipher(decodeCaesar(1, 'bcdefghijklmnopqrstuvwxyza'), 'abcdefghijklmnopqrstuvwxyz');
//Caso 5
checarCipher(encodeCaesar(-1, 'z'), 'y');
//Caso 6
checarCipher(decodeCaesar(-1, 'y'), 'z');
//Caso 7
checarCipher(encodeCaesar(1, 'A'), 'B');
//Caso 8
checarCipher(decodeCaesar(1, 'B'), 'A');
