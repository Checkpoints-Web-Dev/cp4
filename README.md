# 🚗 Loja de Carros – CP4

Este projeto foi desenvolvido como checkpoint da disciplina de **Desenvolvimento Web** na FIAP, com o objetivo de aplicar conceitos de **frontend** e **backend** na criação de uma aplicação web completa.

A aplicação simula uma **loja de carros online**, permitindo interação entre cliente e servidor, consumo de dados via API e organização de componentes de interface.

Link do reposiório: [https://github.com/Checkpoints-Web-Dev/cp4.git](https://github.com/Checkpoints-Web-Dev/cp4.git)

---

## 🙋‍♂️ Integrantes

- Pedro Alves Faleiros - 562523
- Luan Shiba Felix - 565541
- João Pedro Morra Lopes - 565737
- Leandro de Freitas Farias Filho - 566488

---

## 📂 Estrutura do Projeto

O repositório segue a seguinte organização:

```
cp4/
 ├── backend/      # Servidor Node.js com Express
 ├── frontend/     # Aplicação React + Vite
 ├── README.md     # Documentação do projeto
```

- **Backend:** Responsável pelas rotas, respostas e envio de dados ao frontend.  
- **Frontend:** Desenvolvido com React, Vite e TailwindCSS, consome as APIs e exibe as informações ao usuário.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- ⚛️ React  
- ⚡ Vite  
- 🎨 Tailwind CSS  

### Backend
- 🟢 Node.js  
- 🚏 Express  

### Ferramentas adicionais
- Git & GitHub  
- NPM  

---

## ✨ Funcionalidades

- Listagem de carros disponíveis  
- Listagem de lojas cadastradas  
- Página de contato (envio de mensagem para o backend)  
- Integração entre frontend e backend por meio de requisições HTTP  
- Componentização e uso de estados no React  
- Feedback visual ao usuário (mensagens de sucesso e erro)  

---

## 📦 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Checkpoints-Web-Dev/cp4.git
cd cp4
```

### 2. Instalar dependências

#### Backend
```bash
cd backend
node server.js
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Rodar os servidores

#### Backend
```bash
cd backend
npm start
```
O backend será iniciado em `http://localhost:5001`.

#### Frontend
```bash
cd frontend
npm run dev
```
O frontend será iniciado em `http://localhost:5173` (ou porta definida pelo Vite).

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, o grupo pôde:
- Compreender melhor como funciona um servidor Node.js com Express  
- Implementar requisições e respostas HTTP entre cliente e servidor  
- Praticar componentização e gerenciamento de estados no React  
- Utilizar TailwindCSS para estilização rápida e eficiente  
- Trabalhar com integração entre backend e frontend em um projeto real  
