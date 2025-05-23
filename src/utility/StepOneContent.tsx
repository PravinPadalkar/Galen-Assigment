import { Select } from "antd";

const StepOneContent = () => {
  return (
    <>
      <h1 className="text-base font-bold">Selected Doctor With ID 1</h1>
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
    </>
  );
};

export default StepOneContent;
