import { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [typeOfCalculation, setTypeOfCalculation] = useState("add");

  const calculateResult = () => {
    switch (typeOfCalculation) {
      case "add":
        return +number1 + +number2;
      case "subtract":
        return +number1 - +number2;
      case "multiply":
        return +number1 * +number2;
      case "divide":
        return +number1 / +number2;
      default:
        throw new Error("Wrong type of calculation");
    }
  };

  return (
    <>
      <input
        value={number1}
        placeholder="Number 1"
        type="number"
        onChange={(event) => setNumber1(event.target.value)}
      />
      <input
        value={number2}
        placeholder="Number 2"
        type="number"
        onChange={(event) => setNumber2(event.target.value)}
      />
      <button onClick={() => setTypeOfCalculation("add")}>+</button>
      <button
        data-testid="subtract"
        onClick={() => setTypeOfCalculation("subtract")}
      >
        -
      </button>
      <button onClick={() => setTypeOfCalculation("multiply")}>*</button>
      <button onClick={() => setTypeOfCalculation("divide")}>/</button>
      <div>Result {calculateResult()}</div>
    </>
  );
};

export default Calculator;
