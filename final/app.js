// ======================================================================
// AULA 02 - SPA COM JAVASCRIPT PURO
// ======================================================================

const prioridadesArray = [
  { id: "1", nome: "Baixa", classe: "pBaixa" },
  { id: "2", nome: "Média", classe: "pMedia" },
  { id: "3", nome: "Alta", classe: "pAlta" },
];

const chamados = [
  {
    id: 1,
    titulo: "Computador não liga",
    descricao: "O computador não apresenta sinal de energia.",
    prioridade: "Alta",
    status: "Aberto",
  },
  {
    id: 2,
    titulo: "Senha bloqueada",
    descricao: "Usuário não consegue acessar o sistema.",
    prioridade: "Média",
    status: "Em atendimento",
  },
  {
    id: 3,
    titulo: "notebook não liga",
    descricao: "O computador não apresenta sinal de energia.",
    prioridade: "Alta",
    status: "Encerrado",
    solucao: "Chamado encerrado anteriormente.",
  },
];

const app = document.getElementById("app");

function obterChamado(id) {
  return chamados.find((chamado) => chamado.id === Number(id));
}

function obterClassePrioridade(prioridade) {
  const prioridadeObjeto = prioridadesArray.find(
    (item) => item.nome === prioridade,
  );
  return prioridadeObjeto ? prioridadeObjeto.classe : "";
}

function obterClasseStatus(status) {
  const classes = {
    Aberto: "statusAberto",
    "Em atendimento": "statusAtendimento",
    Encerrado: "statusEncerrado",
  };
  return classes[status] || "";
}

function mostrarDashboard() {
  const contadores = {
    total: chamados.length,
    abertos: chamados.filter((chamado) => chamado.status === "Aberto").length,
    atendimento: chamados.filter(
      (chamado) => chamado.status === "Em atendimento",
    ).length,
    encerrados: chamados.filter((chamado) => chamado.status === "Encerrado")
      .length,
    alta: chamados.filter((chamado) => chamado.prioridade === "Alta").length,
  };

  app.innerHTML = `
    <h1 class="mb-4">Dashboard</h1>
    <div class="row g-3">
      <div class="col-md-4"><div class="card"><div class="card-body">
        <h2 class="h5">Total de chamados</h2><p class="display-6">${contadores.total}</p>
      </div></div></div>
      <div class="col-md-4"><div class="card"><div class="card-body">
        <h2 class="h5">Chamados abertos</h2><p class="display-6">${contadores.abertos}</p>
      </div></div></div>
      <div class="col-md-4"><div class="card"><div class="card-body">
        <h2 class="h5">Chamados em atendimento</h2><p class="display-6">${contadores.atendimento}</p>
      </div></div></div>
      <div class="col-md-4"><div class="card"><div class="card-body">
        <h2 class="h5">Chamados encerrados</h2><p class="display-6">${contadores.encerrados}</p>
      </div></div></div>
      <div class="col-md-4"><div class="card"><div class="card-body">
        <h2 class="h5">Chamados de prioridade Alta</h2><p class="display-6">${contadores.alta}</p>
      </div></div></div>
    </div>
  `;
}

function mostrarChamados() {
  app.innerHTML = `
    <h1 class="mb-4">Chamados</h1>
    <div class="table-responsive">
      <table class="table table-striped align-middle">
        <thead><tr>
          <th class="text-center">ID</th>
          <th class="text-center">Título</th>
          <th class="text-center">Prioridade</th>
          <th class="text-center">Status</th>
          <th class="text-center">Ações</th>
        </tr></thead>
        <tbody class="text-center">
          ${chamados
            .map(
              (chamado) => `
                <tr>
                  <td>${chamado.id}</td>
                  <td>${chamado.titulo}</td>
                  <td><span class="badge ${obterClassePrioridade(chamado.prioridade)}">${chamado.prioridade}</span></td>
                  <td><span class="badge ${obterClasseStatus(chamado.status)}">${chamado.status}</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary me-1" data-acao="visualizar" data-id="${chamado.id}">Visualizar</button>
                    ${
                      chamado.status !== "Encerrado"
                        ? `<button class="btn btn-sm btn-outline-danger" data-acao="encerrar" data-id="${chamado.id}">Encerrar chamado</button>`
                        : ""
                    }
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function mostrarNovoChamado() {
  app.innerHTML = `
    <h1 class="mb-4">Novo chamado</h1>
    <form id="formChamado">
      <div class="mb-3">
        <label class="form-label" for="titulo">Título</label>
        <input class="form-control" id="titulo" required>
      </div>
      <div class="mb-3">
        <label class="form-label" for="descricao">Descrição</label>
        <textarea class="form-control" id="descricao" rows="4" required></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label" for="prioridade">Prioridade</label>
        <select class="form-select" id="prioridade" required>
          <option value="">Selecione</option>
          ${prioridadesArray
            .map(
              (prioridade) =>
                `<option value="${prioridade.id}">${prioridade.nome}</option>`,
            )
            .join("")}
        </select>
      </div>
      <button class="btn btn-success" type="submit">Cadastrar</button>
    </form>
  `;
  document
    .getElementById("formChamado")
    .addEventListener("submit", cadastrarChamado);
}

function cadastrarChamado(evento) {
  evento.preventDefault();
  const prioridadeObjeto = prioridadesArray.find(
    (prioridade) =>
      prioridade.id === document.getElementById("prioridade").value,
  );

  if (!prioridadeObjeto) {
    return;
  }

  chamados.push({
    id: chamados.length
      ? Math.max(...chamados.map((chamado) => chamado.id)) + 1
      : 1,
    titulo: document.getElementById("titulo").value.trim(),
    descricao: document.getElementById("descricao").value.trim(),
    prioridade: prioridadeObjeto.nome,
    status: "Aberto",
  });
  mostrarChamados();
}

function mostrarDetalhes(id) {
  const chamado = obterChamado(id);
  if (!chamado) {
    mostrarChamados();
    return;
  }

  app.innerHTML = `
    <h1 class="mb-4">Detalhes do chamado #${chamado.id}</h1>
    <dl class="row">
      <dt class="col-sm-3">Título</dt><dd class="col-sm-9">${chamado.titulo}</dd>
      <dt class="col-sm-3">Descrição</dt><dd class="col-sm-9">${chamado.descricao}</dd>
      <dt class="col-sm-3">Prioridade</dt><dd class="col-sm-9"><span class="badge ${obterClassePrioridade(chamado.prioridade)}">${chamado.prioridade}</span></dd>
      <dt class="col-sm-3">Status</dt><dd class="col-sm-9"><span class="badge ${obterClasseStatus(chamado.status)}">${chamado.status}</span></dd>
      ${
        chamado.status === "Encerrado"
          ? `<dt class="col-sm-3">Solução realizada</dt><dd class="col-sm-9">${chamado.solucao || "Não informada."}</dd>`
          : ""
      }
    </dl>
    <button class="btn btn-secondary" data-acao="voltar">Voltar</button>
  `;
}

function mostrarEncerramento(id) {
  const chamado = obterChamado(id);
  if (!chamado || chamado.status === "Encerrado") {
    mostrarChamados();
    return;
  }

  app.innerHTML = `
    <h1 class="mb-4">Encerrar chamado #${chamado.id}</h1>
    <p><strong>Título:</strong> ${chamado.titulo}</p>
    <p><strong>Descrição:</strong> ${chamado.descricao}</p>
    <p><strong>Prioridade:</strong> ${chamado.prioridade}</p>
    <p><strong>Status atual:</strong> ${chamado.status}</p>
    <form id="formEncerramento">
      <div class="mb-3">
        <label class="form-label" for="solucao">Solução realizada</label>
        <textarea class="form-control" id="solucao" rows="4" required></textarea>
        <div id="mensagemSolucao" class="invalid-feedback">Informe o que foi realizado antes de encerrar o chamado.</div>
      </div>
      <button class="btn btn-danger" type="submit">Confirmar encerramento</button>
      <button class="btn btn-secondary" type="button" data-acao="voltar">Cancelar</button>
    </form>
  `;
  document
    .getElementById("formEncerramento")
    .addEventListener("submit", (evento) => encerrarChamado(evento, chamado));
}

function encerrarChamado(evento, chamado) {
  evento.preventDefault();
  const campoSolucao = document.getElementById("solucao");
  const solucao = campoSolucao.value.trim();

  if (!solucao) {
    campoSolucao.classList.add("is-invalid");
    campoSolucao.focus();
    return;
  }

  chamado.solucao = solucao;
  chamado.status = "Encerrado";
  mostrarChamados();
}

app.addEventListener("click", (evento) => {
  const elemento = evento.target.closest("[data-acao]");
  if (!elemento) {
    return;
  }

  const acao = elemento.dataset.acao;
  if (acao === "visualizar") {
    mostrarDetalhes(elemento.dataset.id);
  } else if (acao === "encerrar") {
    mostrarEncerramento(elemento.dataset.id);
  } else if (acao === "voltar") {
    mostrarChamados();
  }
});

document.querySelectorAll("[data-view]").forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const view = link.dataset.view;
    if (view === "dashboard") mostrarDashboard();
    if (view === "chamados") mostrarChamados();
    if (view === "novo") mostrarNovoChamado();
  });
});

mostrarDashboard();
