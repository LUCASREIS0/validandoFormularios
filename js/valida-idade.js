// Esta função é responsável por validar se a data de nascimento fornecida no campo é de uma pessoa maior de idade.
export default function ehMaiorDeIdade(campo) {
    // Cria um objeto Date usando a data de nascimento fornecida no campo.
    const dataNascimento = new Date(campo.value);

    // Chama a função validaIdade passando a data de nascimento como argumento e imprime o resultado no console.
    console.log(validaIdade(dataNascimento));
}

// Esta função recebe uma data como entrada e verifica se a pessoa é maior de idade com base na data atual.
function validaIdade(data) {
    // Obtém a data atual.
    const dataAtual = new Date();

    // Calcula o ano em que a pessoa completaria 18 anos.
    const anoMais18 = data.getUTCFullYear() + 18; // Obtém o ano de nascimento e adiciona 18 anos.

    // Cria uma nova data representando o momento em que a pessoa completaria 18 anos.
    const dataMais18 = new Date(anoMais18, data.getUTCMonth(), data.getUTCDate());

    // Retorna verdadeiro se a data atual for maior ou igual à data em que a pessoa teria 18 anos, indicando que ela é maior de idade.
    return dataAtual >= dataMais18;
}
