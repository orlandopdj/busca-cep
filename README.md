# Busca CEP
---
Essa página web simples permite que você **busque rapidamente informações de endereço** (logradouro, bairro, cidade e estado) ao inserir o CEP.

## Como Funciona
Abaixo estão os passos para utilizar a ferramenta:

1.  **Acesse o link**: Primeiramente, visite [busca-cep](https://orlandopdj.github.io/busca-cep/). Você verá um campo de entrada em destaque na página. Digite o CEP neste campo.

2.  **Buscar dados"**: Após digitar o CEP, pressione a tecla "Enter". Essa ação inicia o processo de busca.

3.  **Exibição dos Resultados**: Você receberá os seguintes dados:
    * **Logradouro**
    * **Bairro**
    * **Localidade** (Cidade)
    * **UF** (Estado)

4.  **Tratamento de Erros**: Se o CEP digitado for inválido ou não for encontrado no banco de dados, o site exibirá a mensagem "**CEP NAO ENCONTRADO**".

---
## Tecnologias Utilizadas
* **HTML**: Para a estrutura básica da página web.
* **CSS**: Para estilização.
* **JavaScript**: Para lidar com a interação do usuário, fazer requisições à API e exibir os resultados dinamicamente.
* **API de CEP**: Um serviço externo (como o ViaCEP, por exemplo) que fornece os dados de endereço.
