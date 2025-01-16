### Exemplo de Documentação da API

#### Endpoint: Criar Item
- **URL**: `/items`
- **Método**: `POST`
- **Descrição**: Este endpoint permite criar um novo item.

**Entrada (Request Body)**:
{"name": "Novo item"}

**Saída (Response)**:
- **Sucesso (201 Created)**:
{
    "id": 2,
    "name": "Novo Item"
}
- **Erro (400 Bad Request)**:
{
  "error": "Erro ao criar item"
}

---

#### Endpoint: Obter Item/Itens
- **URL**: `/items`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um item ou itens.

**Entrada (Parâmetros de URL)**:
- **id**: ID do item a ser retornado.

**Saída (Response)**:
- **Sucesso (200 OK)**:
{
    "id": 2,
    "name": "Novo Item"
}
- **Erro (404 Not Found)**:
{
  "error": "Erro ao buscar itens"
}

---

#### Endpoint: Atualizar item
- **URL**: `/item/{id}`
- **Método**: `PUT`
- **Descrição**: Atualiza os dados de um item existente.

**Entrada (Request Body e Parâmetros de URL)**:
- **id**: ID do item a ser atualizado.
- **Body**:
{"name": "teclado"}

**Saída (Response)**:
- **Sucesso (200 OK)**:
{
    "id": 2,
    "name": "teclado"
}
- **Erro (400 Bad Request)**:
{
  "error": "Erro ao atualizar item"
}
- **Erro (404 Not Found)**:
{
  "error": "Item não encontrado"
}

---

#### Endpoint: Deletar iteam
- **URL**: `/item/{id}`
- **Método**: `DELETE`
- **Descrição**: Remove um item do sistema.

**Entrada (Parâmetros de URL)**:
- **id**: ID do item a ser removido.

**Saída (Response)**:
- **Sucesso (204 No Content)**:
{
  "message": "Item deletado com sucesso"
}

  - **Erro (400 Bad Request)**:
{
  "error": "Erro ao deletar item"
}
- **Erro (404 Not Found)**:
{
  "error": "Item não encontrado"
}
