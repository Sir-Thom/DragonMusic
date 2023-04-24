import {
  render,
  screen,
  fireEvent,
  waitFor,
  getAllByPlaceholderText,
} from "@testing-library/react";
import { Connexion } from "../src/pages/connexionInscription";
import { MemoryRouter } from "react-router-dom";

describe("Connexion component", () => {
  test("renders the input fields and login button", () => {
    render(
      <MemoryRouter>
        <Connexion />
      </MemoryRouter>
    );

    const inputFields = screen.getAllByPlaceholderText("Xxx_Joe_Blow69_xxX");
    const usernameInput = inputFields[0];
    const emailInput = inputFields[1];
    //  const usernameInput = screen.getByPlaceholderText("Xxx_Joe_Blow69_xxX");
    // const emailInput = screen.getByPlaceholderText("Xxx_Joe_Blow69_xxX");
    const passwordInput = screen.getByText("Mot de passe");
    const loginButton = screen.getByText("Se Connecter");

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("validates username input correctly", async () => {
    render(
      <MemoryRouter>
        <Connexion />
      </MemoryRouter>
    );

    const usernameInputs = screen.getAllByPlaceholderText("Xxx_Joe_Blow69_xxX");
    fireEvent.change(usernameInputs[0], { target: { value: "" } });

    await waitFor(() =>
      expect(screen.queryByText("Ce nom est invalide.")).not.toBeInTheDocument()
    );

    fireEvent.change(usernameInputs[0], { target: { value: "test" } });
    await waitFor(() =>
      expect(screen.queryByText("Ce nom est invalide.")).not.toBeInTheDocument()
    );
  });
});
