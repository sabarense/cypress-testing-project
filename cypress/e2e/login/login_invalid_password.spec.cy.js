/// <reference types="cypress" />

import { TEST_CREDENTIALS } from '../../fixtures/test-credentials.js';

describe("Teste de autenticação com senha inválida", () => {
    const url = "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account";
    const { email, password, wrongPassword } = TEST_CREDENTIALS;
  
    beforeEach(() => {
      cy.visit(url);
      cy.get(".columns-container").as("mainContainer");
      cy.get("#create-account_form").as("createAccountForm");
      cy.get("#login_form").as("loginForm");
    });
  
    it("Deve exibir a página de autenticação corretamente", () => {
      cy.get(".page-heading")
        .should("be.visible")
        .and("contain.text", "Authentication");
      cy.get("@mainContainer").should("be.visible");
      cy.get("@createAccountForm").should("be.visible");
      cy.get("@loginForm").should("be.visible");
    });
  
    it("Deve exibir mensagem de erro ao tentar realizar o login com senha inválida", () => {
      cy.get("@loginForm").within(() => {
        cy.get("#email").type(email);
        cy.get("#passwd").type(wrongPassword);
        cy.get("#SubmitLogin").click();
      });
  
      cy.get("#center_column > :nth-child(2)")
        .should("be.visible")
        .and("contain.text", "There is 1 error");
  
      cy.get("ol > li")
        .should("be.visible")
        .and("contain.text", "Authentication failed.");
  
        cy.get('@loginForm').should('be.visible')
        cy.get('#email').should('have.value', email)
        cy.get('#passwd').should('have.value', wrongPassword)
    });
  });
  