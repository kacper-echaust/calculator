import { useCalculation } from "../hooks/useCalculation";
import { Button } from "./ui/button";

type Props = {
  text: string;
  value: string;
  type: "number" | "operator" | "equal";
};

const CalcButton = ({ text, value, type }: Props) => {
  const { appendNumber, selectOperator, calculateResult } = useCalculation();
  const setFunction = () => {
    switch (type) {
      case "number":
        appendNumber(value);
        break;
      case "operator":
        selectOperator(value);
        break;
      case "equal":
        calculateResult();
    }
  };

  return (
    <Button onClick={() => setFunction()} value={value}>
      {text}
    </Button>
  );
};

export { CalcButton };
