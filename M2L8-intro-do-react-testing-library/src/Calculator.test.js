import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("elements are properly rendered", () => {
    render(<Calculator />);
    const input1 = screen.getByPlaceholderText("Number 1");
    const inputs = screen.getAllByRole("spinbutton");
    const addButton = screen.getByText("+");
    const subtractButton = screen.getByTestId("subtract");

    expect(input1).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(subtractButton).toBeInTheDocument();
  });

  it("is able to subtract two values", () => {
    render(<Calculator />);

    const input1 = screen.getByPlaceholderText("Number 1");
    const input2 = screen.getByPlaceholderText("Number 2");

    userEvent.type(input1, 30);
    userEvent.type(input2, 20);

    userEvent.click(screen.getByTestId("subtract"));

    expect(screen.getByText("Result 10")).toBeInTheDocument();
  });
});
