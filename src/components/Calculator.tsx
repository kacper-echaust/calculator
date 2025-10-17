import { useCalculation } from "../hooks/useCalculation";
import { CalcButton } from "./CalcButton";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Calculator = () => {
  const {
    prevValue,
    currentValue,
    operator,
    appendNumber,
    selectOperator,
    calculateResult,
  } = useCalculation();
  console.log(prevValue, currentValue, operator);
  return (
    <Card className="w-xs">
      <CardHeader className="flex justify-end h-20 text-3xl">
        <CardTitle>{`${prevValue} ${operator} ${currentValue}`}</CardTitle>
      </CardHeader>
      <CardDescription className="grid grid-cols-4 gap-2 w-full p-2">
        <CalcButton text="%" value="%" onClick={() => selectOperator("%")} />
        <CalcButton text="C" value="C" onClick={() => selectOperator("C")} />
        <CalcButton
          text="DEL"
          value="del"
          onClick={() => selectOperator("del")}
        />
        <CalcButton text="/" value="/" onClick={() => selectOperator("/")} />
        <CalcButton text="7" value="7" onClick={() => appendNumber("7")} />
        <CalcButton text="8" value="8" onClick={() => appendNumber("8")} />
        <CalcButton text="9" value="9" onClick={() => appendNumber("9")} />
        <CalcButton text="x" value="x" onClick={() => selectOperator("x")} />
        <CalcButton text="4" value="4" onClick={() => appendNumber("4")} />
        <CalcButton text="5" value="5" onClick={() => appendNumber("5")} />
        <CalcButton text="6" value="6" onClick={() => appendNumber("6")} />
        <CalcButton text="-" value="-" onClick={() => selectOperator("-")} />
        <CalcButton text="1" value="1" onClick={() => appendNumber("1")} />
        <CalcButton text="2" value="2" onClick={() => appendNumber("2")} />
        <CalcButton text="3" value="3" onClick={() => appendNumber("3")} />
        <CalcButton text="+" value="+" onClick={() => selectOperator("+")} />
        <CalcButton text="0" value="0" onClick={() => appendNumber("0")} />
        <CalcButton text="." value="." onClick={() => selectOperator(".")} />
        <CalcButton
          text="="
          value="="
          className="col-span-2"
          onClick={calculateResult}
        />
      </CardDescription>
    </Card>
  );
};

export { Calculator };
