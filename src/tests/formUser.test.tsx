import { render, screen } from "@testing-library/react";
import { UserForm } from "../components/userPage/UserForm";

describe("user form", () => {
  test("should render user form", () => {
    render(<UserForm />);
    const userFormElement = screen.getByTestId("user-form");
    expect(userFormElement).toBeInTheDocument();
  });
});
