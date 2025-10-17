import { Button } from "./ui/button";

type Props = {
  text: string;
  value: string;
  className?: string;
  onClick: () => void;
};

const CalcButton = ({ text, value, className, onClick }: Props) => {
  return (
    <Button className={className} onClick={onClick} value={value}>
      {text}
    </Button>
  );
};

export { CalcButton };
