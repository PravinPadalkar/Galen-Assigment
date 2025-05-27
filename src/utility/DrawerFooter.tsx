import { Button } from "antd";

type FooterPropsType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  selectedSlot: string | undefined;
};

const DrawerFooter = ({ current, setCurrent, selectedSlot }: FooterPropsType) => {
  if (current == 0) {
    return (
      <Button type="primary" onClick={() => setCurrent((prev) => prev + 1)}>
        Next
      </Button>
    );
  } else if (current == 1) {
    return (
      <div className="flex gap-4">
        <Button onClick={() => setCurrent((prev) => prev - 1)}>Previous</Button>
        <Button type="primary" disabled={!selectedSlot} onClick={() => setCurrent((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    );
  } else {
    return <Button onClick={() => setCurrent((prev) => prev - 1)}>Previous</Button>;
  }
};

export default DrawerFooter;
