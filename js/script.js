import ehUmCPF from "./valida-cpf.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo)=> {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    // Verifica se o campo tem o atributo 'name' igual a 'cpf' e se o comprimento do valor do campo é maior ou igual a 11
    if (campo.name == "cpf" && campo.value.length >= 11) {
        // Se a condição acima for verdadeira, chama a função ehUmCPF passando o campo como argumento
        ehUmCPF(campo);
    }
}


