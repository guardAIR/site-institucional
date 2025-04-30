# 🔧 Projeto de Monitoramento de Monóxido de Carbono em Metalurgias — SPTech

Este projeto tem como objetivo monitorar, em tempo real, a concentração de monóxido de carbono (CO) em áreas de soldagem dentro de metalurgias. A solução combina sensores físicos (Arduino + MQ-2) com um sistema web completo que oferece visualização gráfica, alertas e dashboards segmentados por áreas da empresa.

---

## 📍 Contexto

Durante processos de soldagem, o monóxido de carbono pode atingir níveis perigosos, colocando em risco a saúde dos trabalhadores. Pensando nisso, desenvolvemos um sistema capaz de coletar dados diretamente de sensores instalados nos ambientes da empresa e disponibilizar essas informações através de uma interface intuitiva e acessível.

---

## 🧠 Tecnologias Utilizadas

### 🔌 Hardware
- **Arduino UNO**
- **Sensor MQ-2** (detecção de CO e gases inflamáveis)
- **Comunicação Serial USB**

### 🌐 Software
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js com Express
- **Comunicação com Arduino:** [serialport](https://www.npmjs.com/package/serialport)
- **Banco de Dados:** MySQL (via `mysql2`)
- **Gráficos Dinâmicos:** Chart.js
- **API de Aquisição de Dados:** `dat-acq-ino` (recebe e armazena dados do sensor)

---

## 🧩 Funcionalidades do Sistema

### 🔷 Site Institucional
- **Home:** Introdução à solução e seus objetivos
- **Sobre Nós:** Informações da equipe, contexto acadêmico e justificativa do projeto

### 🔷 Autenticação
- **Página de Login/Cadastro** com validação de acesso para administradores e supervisores

### 🔷 Dashboard Geral
- **Resumo da empresa:** exibe alertas ativos, gráficos consolidados e status das áreas monitoradas

### 🔷 Dashboard por Área
- **Visualização detalhada** de cada setor monitorado
- **Alertas específicos** conforme os níveis de CO detectados
- **Gráficos temporais** com dados históricos por sensor

---

## ⚠️ Alertas

O sistema analisa os níveis de monóxido de carbono recebidos via sensor e exibe alertas visuais sempre que os valores ultrapassam o limite seguro estabelecido por normas técnicas.

---

## 🚀 Como Executar o Projeto

### 📦 Requisitos

- Node.js e npm
- MySQL Server
- Arduino IDE

### 🔌 Parte Física
1. Conecte o sensor MQ-2 ao Arduino conforme o circuito definido.
2. Carregue o código de leitura para o Arduino.
3. Certifique-se de que a porta serial está sendo lida corretamente pelo backend.

### 🖥️ Backend (Node.js + Express)
```bash
npm install
npm start
```

🌐 Frontend
Acesse via navegador o arquivo HTML:

📤 API de Coleta (dat-acq-ino)
A API dat-acq-ino roda no backend e recebe dados via SerialPort, salvando-os automaticamente no banco MySQL para visualização futura.

Projeto desenvolvido para a disciplina de Pesquisa e Inovação da Faculdade São Paulo Tech School (SPTech).
