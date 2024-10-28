# Profile View
Este é um projeto de visualização de perfis que permite aos usuários visualizar e gerenciar informações de perfil de forma eficiente.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- [Docker](https://www.docker.com/get-started) (versão mais recente)
- [Docker Compose](https://docs.docker.com/compose/install/) (se não estiver incluído no Docker)


## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/DiasEllen26/profile-view
   cd profile-view
   ```

2. **Construir e Rodar os Containers**

   Utilize o Docker Compose para construir e iniciar os containers necessários para o projeto:

   ```bash
   docker-compose up --build
   ```

3. **Acessar a Aplicação**

   Após a conclusão da construção e inicialização dos containers, a aplicação estará disponível em:

   ```plaintext
   http://localhost:80
   ```


4. **Parar a Aplicação**

   Para parar a aplicação, você pode usar:

   ```bash
   docker-compose down
   ```

