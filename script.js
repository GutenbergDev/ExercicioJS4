function mostrarTabuada() {
    let inNumero = document.querySelector('#inNumero');
    let outTabuada = document.querySelector('#outTabuada');
    let outAutor = document.querySelector('#outAutor');

    let numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...")
        inNumero.focus();
        return;
    }

    // cria uma variável do tipo string, que irá concatenar a resposta
    let resposta = "";

    // cria um laço de repetição
    for (let i = 1; i <= 10; i++) {
        // a variável resposta vai acumulando os novos conteúdos
        resposta = `${resposta}  ${numero} x ${i} = ${numero * i} \n`;
    }

    // o conteúdo da tag pre é alterado para exibir a tabuada do num
    outTabuada.textContent = resposta;
    outAutor.style.color = '#6048b7';
}
let btMostrar = document.querySelector('#btMostrar');
btMostrar.addEventListener("click", mostrarTabuada);