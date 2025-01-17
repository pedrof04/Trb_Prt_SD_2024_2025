# Nome do Projeto

Este projeto é uma aplicação distribuída que implementa uma API RESTful utilizando os conceitos fundamentais de sistemas distribuídos. O sistema foi projetado para ser executado em containers Docker e está documentado para facilitar seu uso.

---

## Informações Acadêmicas

- **Unidade Curricular**: Serviços Distribuídos
- **Professor**: Wenderson Wanzeller
- **Aluno**: Pedro Ferreira e Ruben Rodrigues
- **Matrícula**: 29739 e 29742
- **Ano Letivo**: 2024/2025
- **Instituição de Ensino**: Escola Superior de Tecnologia e Gestão/Instituto Politécnico de Viana do Castelo

---

## Funcionalidades

- API RESTful com suporte aos métodos HTTP: GET, POST, PUT, DELETE.
- Versionamento do código no GitHub com branches para desenvolvimento e produção.
- Imagem Docker publicada no Docker Hub.
- Documentação da API no arquivo API.md.
- Arquivo de coleção do Postman disponível no repositório.

---

## Requisitos

Para executar este sistema, você precisará dos seguintes itens instalados:

- Docker (versão atualizada).
- Git.
- Postman (opcional, para testar as rotas da API).
- Visual Studio Code(opcional).

---

## Como Executar

### Passo 1: Clonar o Repositório

Execute o comando abaixo para clonar o repositório do GitHub:
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copiar Comando Git</title>
    <style>
        .clone-button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .clone-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Clone o Repositório</h1>
    <button class="clone-button" onclick="copyGitCommand()">Copiar Comando</button>

    <script>
        function copyGitCommand() {
            const gitCommand = 'git clone https://github.com/pedrof04/Trb_Prt_SD_2024_2025.git';
            navigator.clipboard.writeText(gitCommand).then(() => {
                alert('Comando copiado para a área de transferência!');
            }, () => {
                alert('Falha ao copiar o comando.');
            });
        }
    </script>
</body>
</html>



Acesse o diretório do projeto:
cd Trb_Prt_SD_2024_2025

Abra o VS Code(opcional): 
code .

---

### Passo 2: Executar a Aplicação com Docker

Certifique-se de que o Docker está em execução e utilize o comando abaixo para construir e executar a aplicação:
docker-compose up --build

Isso iniciará a aplicação e ela estará disponível no endereço: http://localhost:5000.

---

### Passo 3: Testar as Rotas da API

A API pode ser testada utilizando ferramentas como o Postman. Todas as rotas e detalhes de requisição estão documentados no arquivo API.md. Além disso, você pode importar o arquivo de coleção do Postman incluído no repositório para facilitar os testes.

---

## Imagem Docker

A imagem Docker da aplicação foi publicada no Docker Hub e pode ser baixada diretamente com o comando:
docker pull rubenr0drigues/trb_prt_sd

---

## Executar a imagem de produção

Acesse o diretório do projeto:
cd Trb_Prt_SD_2024_2025

Certifique-se de que o Docker está em execução e utilize este comando para executar a imagem de produção que está no docker hub:
docker-compose -f docker-compose-produc.yml up

Depois volte a testar as rotas da api que estão documentadas no arquivo API.md e use a coleção do Postman para facilitar o processo.

---

## Estrutura do Repositório

- API.md: Documentação detalhada das rotas da API.
- docker-compose.yml: Configuração para executar a aplicação em containers Docker.
- postman_collection.json: Arquivo de coleção do Postman para facilitar os testes.
- src/: Código-fonte da aplicação.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
