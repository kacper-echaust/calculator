import { Button } from "./ui/button";

type Props = {
  text: string;
  value: string;
  type: "number" | "operator" | "equal";
};

const CalcButton = ({ text, value, type }: Props) => {
  const setFunction = () => {
    switch (type) {
      case "number":
        handleChangeNumber(value);
        break;
      case "operator":
        handleChangeOperator(value);
        break;
      case "equal":
        handleShowResult();
    }
  };

  return (
    <Button onClick={() => setFunction()} value={value}>
      {text}
    </Button>
  );
};

export { CalcButton };
