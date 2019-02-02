# Cifra de César

## Objetivo
O objetivo do projeto Caesar Cipher é alcançar o maior número de pessoas, usuários que desejam utilizar o site
em dispositivo mobile, tablet ou desktop,o site se adapta em diferentes telas, trazendo o conteúdo de forma responsiva.
O projeto viabiliza o acesso à uma ferramenta que é capaz de criptografar e descriptografar mensagens com facilidade; Ou seja,
qualquer pessoa poderá ultilizar sem dificuldades.

Devido a necessidade de pessoas em ter privacidade em suas mensagens e a falta de um site prático,
decidi criar o Caesar Cipher, sem muitas funcionalidades e com explicações bem claras de como utilizar
o produto.

## Introdução
O site Caesar Cipher encriptografa e descriptografa mensagens com uma chave secreta, só é possível
descriptografar uma mensagem com a chave correta.
A chave é dada de acordo com o deslocamento de letras escolhido pelo cliente. Por exemplo, A chave
escolhida foi 2, em seguida o cliente digita uma mensagem: "abc", e o resultado esperado: "cde",
é possível também o uso de números extensos e até números negativos.

Com um design simples e acessível, qualquer pessoa pode usar!
Nunca foi tão fácil ter privacidade!

### Fluxograma
![fluxograma-cipher](https://raw.githubusercontent.com/renata-ps-santos/caesar-cipher/5494bb7ec673ac897fb256f4b41b19eecba7911e/fluxograma.png)
De acordo com o Fluxograma, o programa espera dois parâmetros que será o deslocamento (offset) e a mensagem (string) e a decisão
do usuário de criptografia ou descriptografia, após a decisão a função recebe os dados do DOM e processa, retornando o resultado da mensagem de acordo com a decisão do usuário.
