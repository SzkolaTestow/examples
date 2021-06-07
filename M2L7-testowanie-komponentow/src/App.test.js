import ReactDOM from "react-dom";
import App from "./App";

afterEach(() => {
  document.body.innerHtml = "";
});

const render = (Component) => {
  ReactDOM.render(
    Component,
    document.body.appendChild(document.createElement("div"))
  );
};

const getByText = (text) => {
  const elements = Array.from(document.querySelectorAll("*")).filter((elem) => {
    const children = elem.childNodes;
    return (
      Array.from(children).find((child) => child.nodeType === Node.TEXT_NODE) &&
      elem.textContent === text
    );
  });
  if (elements.length > 1) {
    throw new Error("More than one element found");
  }
  if (elements.length === 0) {
    throw new Error("No elements found");
  }
  return elements[0];
};

test("renders link to Testy na Frontendzie", () => {
  render(<App />);
  const element = getByText("Testy na Frontendzie");
  expect(element).toBeDefined();
});
