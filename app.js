const form = document.querySelector("form");

async function fetchData(CEP) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}

form.addEventListener("submit", async (e) => {
  const cidadeInfo = document.querySelector(".cidade_container");

  e.preventDefault();
  const cep = e.target.input.value;
  const dadosCEP = await fetchData(cep);

  let novoElement = `
  <div class="cidade_container">
  <p>Cidade: ${dadosCEP.localidade}</p>
  <p>Estado: ${dadosCEP.estado}, ${dadosCEP.uf}</p>
  <p>Região: ${dadosCEP.regiao}</p>
  <p>DDD: ${dadosCEP.ddd}</p>
  <p>CEP: ${dadosCEP.cep}</p>
  </div>`;

  if (dadosCEP.erro == "true") {
    novoElement = `
    <div class="cidade_container">
         <h2>CEP não encontrado.</h2>
    `;
  }
  if (cidadeInfo) {
    cidadeInfo.remove();
  }

  form.insertAdjacentHTML("beforeend", novoElement);

  e.target.input.value = "";
  e.target.input.focus();
});
