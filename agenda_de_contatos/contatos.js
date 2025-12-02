function pegar() {
    return JSON.parse(localStorage.getItem("ag_contatos") || "[]");
}

function gravar(dados) {
    localStorage.setItem("ag_contatos", JSON.stringify(dados));
}

function desenhar(lista) {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    lista.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item.nome + " - " + item.telefone;

        let botao = document.createElement("button");
        botao.textContent = "x";
        botao.onclick = () => {
            let atual = pegar().filter(c => c.nome !== item.nome);
            gravar(atual);
            desenhar(atual);
        };

        li.appendChild(botao);
        ul.appendChild(li);
    });
}


let caixa = document.getElementById("caixa");

document.getElementById("novoContatoBtn").onclick = () => {
    caixa.style.display = "block";
};

document.getElementById("cancelarBtn").onclick = () => {
    caixa.style.display = "none";
};

document.getElementById("salvarBtn").onclick = () => {
    let nome = document.getElementById("nomeInput").value.trim();
    let tel = document.getElementById("telInput").value.trim();

    if (nome === "" || tel === "") return;

    let lista = pegar();
    lista.push({ nome, telefone: tel });

    gravar(lista);
    desenhar(lista);

    caixa.style.display = "none";
};

document.getElementById("buscarBtn").onclick = () => {
    let termo = document.getElementById("busca").value.toLowerCase();
    let filtrado = pegar().filter(c => c.nome.toLowerCase().includes(termo));
    desenhar(filtrado);
};

document.getElementById("verTodos").onclick = () => {
    desenhar(pegar());
};

desenhar(pegar());
