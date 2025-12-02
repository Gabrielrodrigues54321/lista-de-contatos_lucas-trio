function pegar() {
  return JSON.parse(localStorage.getItem("ag_contatos") || "[]");
}

function salvar(lista) {
  localStorage.setItem("ag_contatos", JSON.stringify(lista));
}

let form = document.getElementById("formAdd");

form.onsubmit = e => {
  e.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let tel = document.getElementById("telefone").value.trim();
  let email = document.getElementById("email").value.trim();

  if (nome === "" || tel === "") {
    alert("Preencha os campos obrigatórios.");
    return;
  }

  let lista = pegar();
  lista.push({
    nome: nome,
    telefone: tel,
    email: email
  });

  salvar(lista);

  window.location.href = "contatos.html";
};
