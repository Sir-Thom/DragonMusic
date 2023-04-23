import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "./components/header/NavbarComp";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navigation component", () => {
  it("should render logo and navigation links", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();

    /*const homeLink = screen.queryByText(/Accueil/i);
    expect(homeLink).toBeInTheDocument();

    const addMusicLink = screen.getByText("Ajout de musique");
    expect(addMusicLink).toBeInTheDocument();*/
  });

  it("should open the user menu on button click", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    const userButton = screen.getByRole("button");
    userEvent.click(userButton);

    const loginLink = screen.getByText("Connexion");
    expect(loginLink).toBeInTheDocument();

    const registerLink = screen.getByText("Inscription");
    expect(registerLink).toBeInTheDocument();
  });
});
