import { Button, Select } from "antd";
type StepOneContentPropType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
const StepOneContent = ({ current, setCurrent }: StepOneContentPropType) => {
  return (
    <div className="h-[600px] flex flex-col justify-between">
      <div>
        <h1 className="text-xl">Selected Doctor With ID 1</h1>
        <Select
          showSearch
          className="w-full my-6"
          placeholder="Search to Select"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Doctor1",
            },
          ]}
        />
      </div>
      <div>
        <Button type="primary" onClick={() => setCurrent((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepOneContent;
