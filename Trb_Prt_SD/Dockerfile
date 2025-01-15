# Usar uma imagem oficial do Node.js
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências primeiro
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a API usa
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["node", "api/index.js"]
