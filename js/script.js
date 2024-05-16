import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário, que é recarregar a página.

    // Coleta os valores dos campos do formulário e armazena em um objeto
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    // Armazena os dados coletados do formulário no armazenamento local do navegador
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    // Redireciona o navegador para a página "./abrir-conta-form-2.html"
    window.location.href = "./abrir-conta-form-2.html";
});


camposDoFormulario.forEach((campo)=> {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',     // Indica que um valor é necessário, mas está ausente
    'typeMismatch',     // Indica que o valor fornecido não corresponde ao tipo esperado
    'patternMismatch',  // Indica que o valor fornecido não corresponde ao padrão especificado
    'tooShort',         // Indica que o valor fornecido é muito curto
    'customError'       // Erro personalizado definido pelo desenvolvedor
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

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
    // Itera sobre cada tipo de erro da lista tiposDeErro
    tiposDeErro.forEach(erro => {                                 
        // Verifica se o campo de entrada possui o tipo de erro atual
        if (campo.validity[erro]) {                               
            // Obtém a mensagem de erro correspondente ao tipo de erro atual que antes estava vazia 
            mensagem = mensagens[campo.name][erro];               
            // Exibe a mensagem de erro no console
            console.log(mensagem);                                
        }
    })

    // Obtém o elemento pai (parentNode) do campo de entrada atual
    // e busca um elemento filho com a classe 'mensagem-erro' no span do HTML 
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');  

    // Verifica se o conteúdo do campo de entrada atual é válido de acordo com as regras de validação HTML5
    const validadorDeInput = campo.checkValidity();               

    // Se a validação do campo de entrada falhar
    if (!validadorDeInput) {                                     
        // Define a mensagem de erro no elemento 'mensagemErro'
        mensagemErro.textContent = mensagem;                     
    } else {                                                     
        // Limpa o conteúdo do elemento 'mensagemErro' se a validação do campo de entrada passar
        mensagemErro.textContent = "";                           
    }
}
