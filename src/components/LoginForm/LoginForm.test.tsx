import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import renderWithProviders from "../../utils/testUtils";

describe("Given a LoginForm component", () => {
  renderWithProviders(<LoginForm />);
  describe("When its rendered", () => {
    test("Then it should show an input with a 'Username:' label text", () => {
      const usernameTextField = screen.getByLabelText("Username:");
      const passwordTextField = screen.getByLabelText("Password:");

      expect(usernameTextField).toBeInTheDocument();
      expect(passwordTextField).toBeInTheDocument();
    });
  });
});
