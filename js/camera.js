const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]")

// Variável para armazenar a URL da imagem capturada
let imagemURL = '';

// Adicionando um ouvinte de evento para o botão que inicia a câmera
botaoIniciarCamera.addEventListener('click', async function () {
    // Solicitando permissão para acessar a câmera e o microfone
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({ video: true, audio: false });

    // Escondendo o botão de iniciar câmera após clicar
    botaoIniciarCamera.style.display = "none";
    // Exibindo o campo da câmera após clicar
    campoCamera.style.display = "block";

    // Configurando a fonte do elemento de vídeo para o stream da câmera
    video.srcObject = iniciarVideo;
});

// Adicionando um ouvinte de evento para o botão que tira a foto
botaoTirarFoto.addEventListener('click', function () {
    // Desenhando a imagem do vídeo no canvas
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convertendo a imagem desenhada no canvas para um URL base64
    imagemURL = canvas.toDataURL('image/jpeg');

    // Escondendo o campo da câmera após tirar a foto
    campoCamera.style.display = "none";
    // Exibindo a mensagem após tirar a foto
    mensagem.style.display = "block";
});

// Adicionando um ouvinte de evento para o botão que envia a foto
botaoEnviarFoto.addEventListener('click', () => {
    // Obtendo os dados existentes do localStorage
    const receberDadosExistentes = localStorage.getItem("cadastro");
    // Convertendo os dados do localStorage de volta para objeto JSON
    const converteRetorno = JSON.parse(receberDadosExistentes);

    // Adicionando a URL da imagem capturada aos dados existentes
    converteRetorno.imagem = imagemURL;

    // Salvando os dados atualizados de volta no localStorage
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    // Redirecionando para outra página após enviar a foto
    window.location.href = '../pages/abrir-conta-form-3.html';
})
