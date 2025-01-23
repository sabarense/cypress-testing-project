# Desafio Técnico QA

## 📝 Sobre o Projeto
Este projeto consiste na automação de testes frontend utilizando Cypress para validar funcionalidades de autenticação no site [Automation Practice](http://automationpractice.com). Foi desenvolvido como parte de um desafio técnico para uma vaga de estágio em QA.

## 🎯 Cenários de Teste

### Cenário 1: Verificar login com credenciais válidas
- **Dado** que o usuário esteja na página de autenticação do Automation Practice e tenha uma conta criada no site
- **Quando** o usuário inserir um email válido e uma senha correta
- **Então** o usuário deve ser redirecionado para a página "My account".

### Cenário 2: Verificar login com email inválido
- **Dado** que o usuário esteja na página de autenticação do Automation Practice
- **Quando** o usuário tentar fazer login com um email inválido (ex.: sem o símbolo "@")
- **Então** a página deve exibir uma mensagem de erro indicando que o email é inválido.

### Cenário 3: Verificar login com senha inválida
- **Dado** que o usuário esteja na página de autenticação do Automation Practice
- **Quando** o usuário tentar fazer login com uma senha inválida
- **Então** a página deve exibir uma mensagem de erro indicando falha na autenticação.

## 🔐 Credenciais de Teste

Para executar os testes, é necessário utilizar credenciais válidas no site Automation Practice. O projeto utiliza um email temporário gerado através do serviço temp-mail.org.

### Como gerar novas credenciais
1. Acesse [temp-mail.org](https://temp-mail.org)
2. Gere um novo email temporário
3. Crie uma nova conta no [Automation Practice](http://automationpractice.pl/) usando o email temporário
4. Atualize as credenciais no arquivo `cypress/fixtures/test-credentials.js`

### ⚠️ Observações
- As credenciais atuais são temporárias e podem expirar
- Para execução local dos testes, você pode precisar gerar suas próprias credenciais

## 🛠️ Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- JavaScript
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)

## ⚙️ Pré-requisitos
Para executar este projeto, é necessário ter instalado:
- [Node.js](https://nodejs.org/)
- NPM (Node Package Manager)
- Visual Studio Code ou IDE similar
- [Google Chrome](https://www.google.com/chrome/)

## 🚀 Instalação e Execução

### Instalação
```bash
# Clone o repositório
git clone https://github.com/sabarense/technical-challenge-qa-intern

# Entre no diretório
cd technical-challenge-qa-intern

# Instale as dependências
npm install
```

### Execução dos Testes
```bash
# Abrir o Cypress Test Runner
npx cypress open

# Executar testes em modo headless
npx cypress run
```

## 📁 Estrutura do Projeto
```
technical-challenge-qa-intern/
├── cypress/
│   ├── e2e/
│   │   └── login/
│   │       ├── login_invalid_email.spec.cy.js
│   │       ├── login_successfully.spec.cy.js
│   │       └── login_invalid_password.spec.cy.js
│   ├── fixtures/
│   │   └── test-credentials.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 🧩 Testes Implementados
Os arquivos de teste estão localizados no diretório `cypress/e2e/login` e abrangem os seguintes cenários:
- **login_invalid_email.spec.cy.js**: Teste para login com email inválido.
- **login_successfully.spec.cy.js**: Teste para login bem-sucedido com credenciais válidas.
- **login_invalid_password.spec.cy.js**: Teste para login com senha inválida.

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença
Este projeto é licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).


