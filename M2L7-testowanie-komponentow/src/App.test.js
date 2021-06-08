import ReactDOM from "react-dom";
import App from "./App";

const render = (Component) => {
  ReactDOM.render(
    Component,
    document.body.appendChild(document.createElement("div"))
  );
};

const getByText = (text) => {
  const foundElements = Array.from(document.querySelectorAll("*")).filter(
    (elem) => {
      const children = elem.childNodes;
      return Array.from(children).find(
        (child) =>
          child.nodeType === Node.TEXT_NODE && elem.textContent === text
      );
    }
  );

  if (foundElements.length > 1) {
    throw new Error("More then one element found");
  }

  if (foundElements.length === 0) {
    throw new Error("No elements found");
  }

  return foundElements[0];
};

it("renders link to Testy na Frontendzie", () => {
  render(<App />);
  const link = getByText("Testy na Frontendzie");
  expect(link).toBeDefined();
});
