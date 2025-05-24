import { Select } from "antd";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
type StepOneContentPropType = {
  selectedDoctorId: string | undefined;
  setSelectedDoctorId: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const StepOneContent = ({ selectedDoctorId, setSelectedDoctorId }: StepOneContentPropType) => {
  const { doctersDetails } = useDoctorDetails();
  console.log(selectedDoctorId);
  return (
    <>
      <h1 className="text-base font-bold">Select Doctor</h1>
      <Select
        showSearch
        className="w-full my-6"
        placeholder="Search to Select"
        optionFilterProp="label"
        onChange={(e) => setSelectedDoctorId(e)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={doctersDetails.map((doctor) => ({
          label: doctor.doctorName,
          value: doctor.doctorId,
        }))}
      />
    </>
  );
};

export default StepOneContent;
