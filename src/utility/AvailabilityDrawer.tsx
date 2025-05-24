import { DeleteOutlined } from "@ant-design/icons";
import { Button, Divider, Select, TimePicker, Tooltip } from "antd";
import type { DoctorsWeeklyScheduleType, SlotDurationEnum } from "../Helper/types";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDoctorDetails } from "../hooks/useDoctorDetails";

const AvailabilityDrawer = () => {
  const {
    doctersDetails,
    setDoctersDetails,
    doctorsWeeklySchedule,
    setDoctorsWeeklySchedule,
    setIsAvailabilityDrawerOpen,
  } = useDoctorDetails();
  const format = "hh:mm:A";

  const [tempSchedule, setTempSchedule] = useState<DoctorsWeeklyScheduleType[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<SlotDurationEnum>();
  useEffect(() => {
    setTempSchedule(doctorsWeeklySchedule);
    setSelectedSlot(doctersDetails.find((doctor) => doctor.doctorId == "1")?.slotDuration);
  }, [doctorsWeeklySchedule]);

  const handleChange = (dayOfWeek: String, key: "isAvailable" | "startTime" | "endTime", value: boolean | string) => {
    setTempSchedule((prev) => prev.map((item) => (item.dayOfWeek == dayOfWeek ? { ...item, [key]: value } : item)));
  };
  const onSave = () => {
    if (selectedSlot) {
      setDoctersDetails((prev) =>
        prev.map((doctor) => (doctor.doctorId == "1" ? { ...doctor, slotDuration: selectedSlot } : doctor))
      );
    }
    setDoctorsWeeklySchedule(tempSchedule);
    setIsAvailabilityDrawerOpen(false);
  };
  const oncancel = () => {
    setIsAvailabilityDrawerOpen(false);
    setTempSchedule(doctorsWeeklySchedule);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <p>Slots With Duration:</p>
        <Select
          defaultValue={doctersDetails.find((doctor) => doctor.doctorId == "1")?.slotDuration}
          size="middle"
          style={{ width: 120 }}
          options={[
            { value: "thirty", label: "30 Min" },
            { value: "sixty", label: "60 Min" },
          ]}
          onChange={(e) => setSelectedSlot(e)}
        />
      </div>
      <Divider></Divider>

      {tempSchedule.map((weekData) => (
        <div key={weekData.dayOfWeek}>
          <div className="flex items-center justify-between w-[450px]">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={weekData.isAvailable}
                className="accent-green-600 text-xl w-5 h-5 cursor-pointer"
                onChange={() => handleChange(weekData.dayOfWeek, "isAvailable", !weekData.isAvailable)}
              ></input>
              <h1 className="font-bold  ">{weekData.dayOfWeek}</h1>
            </div>
            {weekData.isAvailable ? (
              <div className="flex gap-2 items-center">
                <TimePicker
                  allowClear={false}
                  onChange={(e) => handleChange(weekData.dayOfWeek, "startTime", e.format(format))}
                  defaultValue={weekData.slotStartTime ? dayjs(weekData.slotStartTime, format) : undefined}
                  placeholder="Start Time"
                  showNow={false}
                  minuteStep={30}
                  format={format}
                ></TimePicker>
                <p>-</p>
                <TimePicker
                  allowClear={false}
                  onChange={(e) => handleChange(weekData.dayOfWeek, "endTime", e.format(format))}
                  defaultValue={weekData.slotStartTime ? dayjs(weekData.slotEndTime, format) : undefined}
                  placeholder="End Time"
                  showNow={false}
                  minuteStep={30}
                  format={format}
                ></TimePicker>
              </div>
            ) : (
              <div>Unavailable</div>
            )}
            <Tooltip title="Delete">
              <Button
                disabled={!weekData.isAvailable}
                size="large"
                color="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => handleChange(weekData.dayOfWeek, "isAvailable", !weekData.isAvailable)}
              />
            </Tooltip>
          </div>
          <Divider />
        </div>
      ))}
      <div className="flex gap-4">
        <Button type="primary" onClick={() => onSave()}>
          Save
        </Button>
        <Button type="default" onClick={() => oncancel()}>
          Cancel
        </Button>
      </div>
    </>
  );
};

export default AvailabilityDrawer;
