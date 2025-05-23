import { Button } from "antd";

type FooterPropsType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const DrawerFooter = ({ current, setCurrent }: FooterPropsType) => {
  return (
    <div className="flex gap-4">
      {current !== 2 ? (
        <Button type="primary" onClick={() => setCurrent((prev) => prev + 1)}>
          Next
        </Button>
      ) : (
        // <Button type="primary" onClick={() => console.log("Form Clicked")}>
        //   Save
        // </Button>
        <></>
      )}
      {current > 0 && current <= 2 && <Button onClick={() => setCurrent((prev) => prev - 1)}>Previous</Button>}
    </div>
  );
};

export default DrawerFooter;
