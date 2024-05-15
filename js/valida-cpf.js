// Exportando a função ehUmCPF como uma função padrão
export default function ehUmCPF(campo) {
    // Removendo pontos e traços do valor do campo e armazenando o resultado na variável 'cpf'
    const cpf = campo.value.replace(/\.|-/g, "");
    // Imprimindo o CPF resultante no console
    console.log(validaNumerosRepetidos(cpf));
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}