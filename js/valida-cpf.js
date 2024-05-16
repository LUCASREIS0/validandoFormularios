// Função para validar se é um CPF válido
export default function ehUmCPF(campo) {
    // Remove pontos e traços do valor do campo de entrada para obter apenas os números do CPF
    const cpf = campo.value.replace(/\.|-/g, "");

    // Verifica se há números repetidos no CPF ou se os dígitos verificadores são inválidos
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        // Se alguma das condições for verdadeira, o CPF é inválido
        console.log("Esse cpf não existe");
    } else {
        // Se todas as condições forem falsas, o CPF é válido
        console.log("Esse cpf existe");
    }
}

// Função para verificar se há números repetidos no CPF
function validaNumerosRepetidos(cpf) {
    // Lista de CPFs com todos os números iguais
    const numerosRepetidos = [
        '00000000000', '11111111111', '22222222222', '33333333333', '44444444444',
        '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'
    ];

    // Verifica se o CPF fornecido está na lista de CPFs com números repetidos
    return numerosRepetidos.includes(cpf);
}

// Função para validar o primeiro dígito verificador do CPF
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    // Realiza a soma ponderada dos nove primeiros dígitos do CPF
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += parseInt(cpf[tamanho]) * multiplicador;
        multiplicador--;
    }

    // Calcula o primeiro dígito verificador
    soma = (soma * 10) % 11;
    if (soma === 10 || soma === 11) {
        soma = 0; // Se o resultado for 10 ou 11, o dígito verificador é 0
    }

    // Retorna verdadeiro se o primeiro dígito verificador calculado for diferente do décimo dígito do CPF
    return soma !== parseInt(cpf[9]);
}

// Função para validar o segundo dígito verificador do CPF
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    // Realiza a soma ponderada dos dez primeiros dígitos do CPF (incluindo o primeiro dígito verificador)
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += parseInt(cpf[tamanho]) * multiplicador;
        multiplicador--;
    }

    // Calcula o segundo dígito verificador
    soma = (soma * 10) % 11;
    if (soma === 10 || soma === 11) {
        soma = 0; // Se o resultado for 10 ou 11, o dígito verificador é 0
    }

    // Retorna verdadeiro se o segundo dígito verificador calculado for diferente do décimo primeiro dígito do CPF
    return soma !== parseInt(cpf[10]);
}