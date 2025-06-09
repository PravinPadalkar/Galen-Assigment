import { DeleteOutlined } from "@ant-design/icons";
import { Button, Divider, Select, TimePicker, Tooltip } from "antd";
import type { DoctorWeeklyScheduleType, SlotDurationEnum } from "../Helper/types";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
import useApp from "antd/es/app/useApp";
import { defaultWeeklyScheduleDummyList } from "../Helper/DefaultScheduleList";
type SlotTimeErrorType = {
  dayOfWeek: string;
  msg: string;
};
const AvailabilityDrawer = () => {
  const {
    doctersDetails,
    setDoctersDetails,
    doctorsWeeklyScheduleList,
    setDoctorsWeeklyScheduleList,
    setIsAvailabilityDrawerOpen,
  } = useDoctorDetails();
  const format = "hh:mm:A";
  const { message } = useApp();
  const [tempSchedule, setTempSchedule] = useState<DoctorWeeklyScheduleType[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<SlotDurationEnum>();
  const [slotTimeError, setSlotTimeError] = useState<SlotTimeErrorType>();
  useEffect(() => {
    setTempSchedule(
      doctorsWeeklyScheduleList.find((item) => item.doctorId == "1")?.doctorWeeklySchedule ||
        defaultWeeklyScheduleDummyList
    );
    setSelectedSlot(doctersDetails.find((doctor) => doctor.doctorId == "1")?.slotDuration);
  }, [doctorsWeeklyScheduleList]);
  const handleChange = (
    dayOfWeek: string,
    key: "isAvailable" | "slotStartTime" | "slotEndTime",
    value: boolean | string
  ) => {
    // console.log(value);
    setTempSchedule((prev) =>
      prev.map((item) => {
        if (item.dayOfWeek == dayOfWeek) {
          let newItem = { ...item, [key]: value };
          if (key == "slotEndTime" || key == "slotStartTime") {
            // console.log("checking");
            let start = dayjs(newItem.slotStartTime);
            let end = dayjs(newItem.slotEndTime);
            if (end.isBefore(start) || end.isSame(start) || start.isAfter(end)) {
              setSlotTimeError({ dayOfWeek, msg: "End-Time Cannot Be Smaller Or Equal to Start-Time" });
            } else {
              setSlotTimeError(undefined);
            }
          }
          return newItem;
        }
        return item;
      })
    );
  };
  const onSave = () => {
    if (selectedSlot) {
      setDoctersDetails((prev) =>
        prev.map((doctor) => (doctor.doctorId == "1" ? { ...doctor, slotDuration: selectedSlot } : doctor))
      );
    }
    message.success("Schedule Updated Successfully!!");
    setDoctorsWeeklyScheduleList((prevState) => {
      return prevState.map((item) => {
        if (item.doctorId == "1") {
          return { ...item, doctorWeeklySchedule: tempSchedule };
        }
        return item;
      });
    });
    setIsAvailabilityDrawerOpen(false);
  };
  const oncancel = () => {
    setIsAvailabilityDrawerOpen(false);
    setTempSchedule(doctorsWeeklyScheduleList.find((item) => item.doctorId == "1")!.doctorWeeklySchedule);
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
              <div className="flex gap-2 items-center relative">
                <TimePicker
                  allowClear={false}
                  onChange={(e) => handleChange(weekData.dayOfWeek, "slotStartTime", e.toISOString())}
                  defaultValue={weekData.slotStartTime ? dayjs(weekData.slotStartTime) : undefined}
                  placeholder="Start Time"
                  showNow={false}
                  minuteStep={30}
                  format={format}
                ></TimePicker>
                <p>-</p>
                <TimePicker
                  allowClear={false}
                  onChange={(e) => handleChange(weekData.dayOfWeek, "slotEndTime", e.toISOString())}
                  defaultValue={weekData.slotEndTime ? dayjs(weekData.slotEndTime) : undefined}
                  placeholder="End Time"
                  showNow={false}
                  minuteStep={30}
                  format={format}
                ></TimePicker>
                {weekData.dayOfWeek == slotTimeError?.dayOfWeek && (
                  <p className="text-[12px] text-red-500 absolute top-10 text-nowrap">{slotTimeError.msg}</p>
                )}
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
        <Button type="primary" disabled={slotTimeError ? true : false} onClick={() => onSave()}>
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
