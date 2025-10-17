import { useState } from "react";

const useCalculation = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");

  const appendNumber = (number: string) => {
    if (!currentValue && number === ".") return;
    if (currentValue.includes(".") && number === ".") return;
    if (
      number === "0" &&
      currentValue.startsWith("0") &&
      !currentValue.includes(".")
    )
      return;
    setCurrentValue(currentValue + number);
  };

  const selectOperator = (operatorFromButton: string) => {
    if (operatorFromButton === "C") {
      setCurrentValue("");
      setOperator("");
      setPrevValue("");
      return;
    }
    if (operatorFromButton === "del") {
      setCurrentValue(currentValue.slice(0, currentValue.length - 1));
      return;
    }
    if (!currentValue) return;

    setOperator(operatorFromButton);
    setPrevValue(currentValue);
    setCurrentValue("");
  };
  const calculateResult = () => {
    if (!currentValue || !prevValue) return;
    setCurrentValue(
      performCalculation(Number(prevValue), Number(currentValue))
    );
    setOperator("");
    setPrevValue("");
  };
  const performCalculation = (a: number, b: number): string => {
    let result = 0;
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "/":
        if (b === 0) return "Nie można dzielić przez 0";
        result = a / b;
        break;
      case "x":
        result = a * b;
        break;
      case "%":
        result = a * (b / 100);
        break;
    }
    return result?.toString();
  };

  return {
    currentValue,
    prevValue,
    operator,
    appendNumber,
    selectOperator,
    calculateResult,
  };
};

export { useCalculation };
