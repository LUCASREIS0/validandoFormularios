import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

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
    // Verifica se o campo tem o nome "aniversario" e se o valor não está vazio.
    if (campo.name == "aniversario" && campo.value != "") {
        // Chama a função ehMaiorDeIdade passando o campo como argumento para validar a idade.
        ehMaiorDeIdade(campo);
    }
}


