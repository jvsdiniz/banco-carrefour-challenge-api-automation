# 🔵 Desafio Técnico - Banco Carrefour | API 

Este repositório tem como objetivo demonstrar automações aplicadas ao endpoint de usuários da API https://serverest.dev/ através de scripts automatizados, são realizados testes que validam comportamentos esperados, respostas da API e cenários diversos.

## 🛠️ Tecnologias e bibliotecas utilizadas

- **[Cypress](https://www.cypress.io/)** – Framework de testes end-to-end para aplicações web e APIs
- **[Cucumber](https://cucumber.io/)** (com `@badeball/cypress-cucumber-preprocessor`) – Para escrita de testes no formato Gherkin
- **[Faker.js](https://github.com/faker-js/faker)** – Geração de dados aleatórios para os testes
- **[Mochawesome](https://github.com/adamgruber/mochawesome)** – Geração de relatórios HTML detalhados dos testes
- **[Esbuild](https://github.com/evanw/esbuild)** – Preprocessor rápido para integração com Cucumber
- **[Webpack Preprocessor](https://github.com/cypress-io/cypress-webpack-preprocessor)** – Alternativa ao esbuild, usado em alguns contextos de build
- **[cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api)** – Plugin auxiliar para chamadas de API com Cypress

## 💻 Pré-requisitos

Antes de rodar o projeto, verifique se os seguintes pré-requisitos estão atendidos:

- Node.js instalado (versão recomendada: 20 ou superior)`
- npm ou Yarn instalado
- Sistema operacional compatível (Windows, macOS ou Linux)

## 🚀 Instalação

Para instalar siga estas etapas:

Clonar repositório: 
```
git clone https://github.com/jvsdiniz/banco-carrefour-challenge-api-automation.git
```

Instalar as dependências do projeto com o comando:
```
npm install
```

## ▶️ Execução do projeto

Para executar os testes em modo headless utilize o comando:
```
npm run cypress:run
```
> Quando utilizar o Cypress dessa maneira todos os testes serão executados.

Para executar os testes em modo interativo:
```
npm run cypress:open
```
> Quando utilizar o Cypress dessa maneira selecione E2E Testing e depois a feature desejada.

Para gerar o relatório em HTML:
```
npm run generate:html
```
> O relatório só é gerado quando o cypress é executado em modo headless, então após rodar dessa maneira, execute o comando para gerar o report em html.

Para realizar uma limpeza dos reports já gerados:
```
npm run clean:reports
```
> Esse comando já é executado quando rodamos o Cypress, mas caso queira, pode rodar separadamente também.

## 📁 Estrutura do projeto
```bash
BANCO-CARREFOUR-CHALLENGE-API-AUTO/
├── .github/
│   └── workflows/
│       └── actions.yaml
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Arquivos .feature do Cucumber
│   │   └── services/            # Requisições e interações com a API
│   ├── fixtures/                # Dados estáticos para os testes (Não utilizado)
│   ├── reports/
│   │   └── mochawesome/
│   │       └── Relatório de testes de API.html
│   ├── screenshots/             # Capturas de tela dos testes (geradas automaticamente)
│   └── support/
│       ├── step_definitions/
│       │   └── api/             # Arquivos .js dos passos do Cucumber
│       ├── commands.js          # Custom commands do Cypress (Não utilizado)
│       ├── e2e.js               # Setup geral dos testes e plugins
│       └── utils.js             # Funções utilitárias
├── node_modules/
├── .gitignore
├── cypress.config.js           # Configuração do Cypress
├── package.json
├── package-lock.json
└── README.md
```

## 📚 Casos de Teste
Os testes automatizados deste projeto foram organizados em dois grupos principais:
✅ Cenários de Sucesso (Fluxo Feliz):
Representam os fluxos positivos da aplicação, ou seja, quando a API responde conforme o esperado em condições ideais. Exemplos incluem:
- Cadastro de usuário com dados válidos;
- Atualização de dados de um usuário existente;

❌ Cenários de Falha (Fluxo Alternativo):
Simulam situações onde a API deve retornar erros ou comportamentos controlados, como:
- Tentativa de cadastro com e-mail já existente
- Exclusão de usuário inexistente

Essa separação tem como objetivo facilitar a leitura, manutenção e análise dos testes, deixando claro quais casos representam comportamentos esperados e quais simulam erros ou exceções do sistema.

## ✅ CI/CD 
- A pipeline está configurada com GitHub Actions
- Os resultados podem ser acompanhados na aba Actions do repositório

## 👨‍💻 Autor
- Desenvolvido por João Diniz
- 📧 jdinizctt@gmail.com
