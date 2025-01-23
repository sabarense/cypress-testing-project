/// <reference types="cypress" />

import { TEST_CREDENTIALS } from '../../fixtures/test-credentials.js';

describe("Teste de autenticação com credenciais válidas", () => {
  const url = "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account";
  const authenticatedUrl = "http://www.automationpractice.pl/index.php?controller=my-account";
  const { email, password } = TEST_CREDENTIALS;

  beforeEach(() => {
    cy.visit(url);
  });

  it("Deve exibir a página de autenticação corretamente", () => {
    cy.get(".page-heading")
      .should("be.visible")
      .and("contain.text", "Authentication");

    cy.get(".columns-container").should("be.visible");
    cy.get("#create-account_form").should("be.visible");
    cy.get("#login_form").should("be.visible");
  });

  it("Deve realizar o login com sucesso e exibir a página de minha conta corretamente", () => {
    cy.get("#login_form").within(() => {
      cy.get("#email").type(email);
      cy.get("#passwd").type(password);
      cy.get("#SubmitLogin").click();
    });

    cy.url().should("eq", authenticatedUrl);

    cy.get("#columns").should("be.visible");

    cy.get(".page-heading")
      .should("be.visible")
      .and("contain.text", "My account");

    cy.get(".info-account")
      .should("be.visible")
      .and(
        "contain.text",
        "Welcome to your account. Here you can manage all of your personal information and orders."
      );

      const accountOptions = [
        { selector: '.myaccount-link-list > :nth-child(1) > a', text: "Add my first address" },
        { selector: '.myaccount-link-list > :nth-child(2) > a', text: "Order history and details" },
        { selector: '.myaccount-link-list > :nth-child(3) > a', text: "My credit slips" },
        { selector: '.myaccount-link-list > :nth-child(4) > a', text: "My addresses" },
        { selector: '.myaccount-link-list > :nth-child(5) > a', text: "My personal information" }
      ];
      
      accountOptions.forEach(option => {
        cy.get(option.selector)
          .should("be.visible")
          .and("contain.text", option.text)
          .find('i') 
          .should("be.visible");
      });
      
  });
});
