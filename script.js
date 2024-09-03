function iniciarJogo() {
    document.getElementById("introducao").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    mostrarDialogo("Você chega ao apartamento de Crislaine Aragão, onde o crime ocorreu. Há várias pistas espalhadas pelo local. Onde você vai começar?", [
        { texto: "Examinar o quarto", acao: examinarQuarto },
        { texto: "Interrogar vizinhos", acao: interrogarVizinhos },
        { texto: "Analisar o celular de Crislaine", acao: analisarCelular }
    ]);
}

function mostrarDialogo(texto, opcoes) {
    document.getElementById("dialogo").innerHTML = "<p>" + texto + "</p>";
    let botoes = document.getElementById("opcoes");
    botoes.innerHTML = '';  // Limpa os botões anteriores

    opcoes.forEach(opcao => {
        let botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.onclick = opcao.acao;  // Associa a função correta ao botão
        botoes.appendChild(botao);
    });
}

function examinarQuarto() {
    mostrarDialogo("No quarto, você encontra uma carta rasgada e manchas de sangue. O que fazer?", [
        { texto: "Coletar a carta como evidência", acao: coletarCarta },
        { texto: "Examinar o armário", acao: examinarArmario },
        { texto: "Examinar o banheiro", acao: examinarBanheiro }
    ]);
}

function examinarArmario() {
    mostrarDialogo("No armário, você encontra roupas rasgadas e um cofre aberto. O que fazer?", [
        { texto: "Investigar o cofre", acao: investigarCofre },
        { texto: "Procurar mais pistas", acao: procurarPistas }
    ]);
}

function investigarCofre() {
    mostrarDialogo("Dentro do cofre, você encontra uma joia que parece ter sido roubada. O que fazer?", [
        { texto: "Levar a joia como evidência", acao: levarJoia },
        { texto: "Examinar o banheiro", acao: examinarBanheiro }
    ]);
}

function procurarPistas() {
    mostrarDialogo("Você encontra um bilhete com ameaças. O que fazer?", [
        { texto: "Analisar o bilhete", acao: analisarBilhete },
        { texto: "Voltar ao quarto", acao: examinarQuarto }
    ]);
}

function analisarBilhete() {
    mostrarDialogo("O bilhete contém ameaças de morte. Ele parece ser de alguém próximo a Crislaine. O que fazer?", [
        { texto: "Confrontar o ex-namorado", acao: confrontarExNamorado },
        { texto: "Continuar investigando o apartamento", acao: examinarQuarto }
    ]);
}

function interrogarVizinhos() {
    mostrarDialogo("Os vizinhos mencionam ter visto uma pessoa suspeita entrando no apartamento na noite do crime. O que fazer?", [
        { texto: "Obter uma descrição da pessoa", acao: obterDescricao },
        { texto: "Verificar câmeras de segurança", acao: verificarCameras }
    ]);
}

function obterDescricao() {
    mostrarDialogo("Os vizinhos descrevem um homem com uma tatuagem no braço. O que fazer?", [
        { texto: "Procurar pessoas com tatuagem", acao: procurarTatuagem },
        { texto: "Voltar ao apartamento", acao: examinarQuarto }
    ]);
}

function verificarCameras() {
    mostrarDialogo("As câmeras de segurança mostram a pessoa entrando no apartamento. Você tem uma nova pista!", [
        { texto: "Procurar mais informações sobre a pessoa", acao: procurarInformacoes },
        { texto: "Confrontar o ex-namorado", acao: confrontarExNamorado }
    ]);
}

function procurarInformacoes() {
    mostrarDialogo("A pessoa capturada pelas câmeras tem um histórico criminal. O que fazer?", [
        { texto: "Investigar o passado da pessoa", acao: investigarPassado },
        { texto: "Continuar a investigação", acao: examinarQuarto }
    ]);
}

function investigarPassado() {
    mostrarDialogo("Você descobre que essa pessoa tinha uma relação com Crislaine. O que fazer?", [
        { texto: "Confrontar a pessoa", acao: confrontarPessoa },
        { texto: "Reunir mais evidências", acao: examinarQuarto }
    ]);
}

function confrontarPessoa() {
    mostrarDialogo("A pessoa nega envolvimento, mas há inconsistências em sua história. O que fazer?", [
        { texto: "Acusar a pessoa", acao: acusarPessoa },
        { texto: "Continuar a investigar", acao: examinarQuarto }
    ]);
}

function confrontarExNamorado() {
    mostrarDialogo("O ex-namorado nega envolvimento, mas suas respostas são inconsistentes. O que fazer agora?", [
        { texto: "Acusar o ex-namorado", acao: acusarExNamorado },
        { texto: "Continuar investigando", acao: examinarQuarto }
    ]);
}

function coletarCarta() {
    mostrarDialogo("Você coleta a carta como evidência. O que fazer agora?", [
        { texto: "Analisar o celular de Crislaine", acao: analisarCelular },
        { texto: "Interrogar vizinhos", acao: interrogarVizinhos }
    ]);
}

function examinarBanheiro() {
    mostrarDialogo("No banheiro, você encontra uma toalha ensanguentada. O que fazer?", [
        { texto: "Coletar a toalha como evidência", acao: coletarToalha },
        { texto: "Examinar o armário", acao: examinarArmario }
    ]);
}

function coletarToalha() {
    mostrarDialogo("Você coleta a toalha como evidência. O que fazer agora?", [
        { texto: "Analisar o celular de Crislaine", acao: analisarCelular },
        { texto: "Interrogar vizinhos", acao: interrogarVizinhos }
    ]);
}

function analisarCelular() {
    mostrarDialogo("O celular de Crislaine revela mensagens ameaçadoras de um ex-namorado. O que você vai fazer?", [
        { texto: "Confrontar o ex-namorado", acao: confrontarExNamorado },
        { texto: "Analisar mais evidências", acao: examinarQuarto }
    ]);
}

function acusarExNamorado() {
    mostrarDialogo("Você acusa o ex-namorado. Após uma investigação mais aprofundada, ele é preso. Parabéns, você resolveu o caso!", []);
    document.getElementById("erro").style.display = "none";
}

function acusarPessoa() {
    mostrarDialogo("Você acusa a pessoa capturada nas câmeras. Após investigações, ela é presa. Parabéns, você resolveu o caso!", []);
    document.getElementById("erro").style.display = "none";
}

function reiniciarJogo() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("introducao").style.display = "block";
    document.getElementById("erro").style.display = "none";
}
