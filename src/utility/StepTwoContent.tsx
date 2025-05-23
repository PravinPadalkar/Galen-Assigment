import { Button, DatePicker, type DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
type StepOneContentPropType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
const StepTwoContent = ({ current, setCurrent }: StepOneContentPropType) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>();
  const onChange: DatePickerProps["onChange"] = (date) => {
    console.log(date.format("DD/MM/YYYY"), date.format("ddd"));
    setSelectedDate(date);
  };
  const disablePastDates = (current: Dayjs) => {
    return current < dayjs().startOf("day");
  };
  const [slotArray, setSlotArray] = useState<React.ReactNode[]>();
  useEffect(() => {
    const isAvailable = true;
    const date = "23/05/2025";
    const slotStartTime = "10:00 AM";
    const slotEndTime = "3:00 PM";
    const slotDuration = 30;
    const BookedSlots: string[] = ["10:00 AM", "03:00 PM ", "11:30 AM", "02:00 PM"];
    const TotalSlots: string[] = [];

    //calculate total slots
    const start = dayjs(slotStartTime, "hh:mm A");
    const end = dayjs(slotEndTime, "hh:mm A");
    for (let current = start; current.isBefore(end) && isAvailable; current = current.add(slotDuration, "minute")) {
      TotalSlots.push(current.format("hh:mm A"));
    }
    const AvailableSlots: string[] = TotalSlots.filter((slot) => !BookedSlots.includes(slot));

    console.log("TotalSlots", TotalSlots);
    console.log("BookedSlots", BookedSlots);
    console.log("AvailableSlots", AvailableSlots);
    setSlotArray(AvailableSlots);
  }, []);

  return (
    <div className="h-[600px] flex flex-col justify-between">
      <div>
        <h1 className="text-lg font-bold">Pick A Slot</h1>
        <div className="flex gap-2 items-center justify-end mb-8">
          <label className="text-base" htmlFor="selectDate">
            Select Date:
          </label>
          <DatePicker id="selectDate" disabledDate={disablePastDates} onChange={onChange} />
        </div>
        {slotArray?.length === 0 ? (
          <div className="text-center">No Available Slot</div>
        ) : (
          <div>
            <h1 className="text-center mb-4">Available Slots</h1>
            <div className="flex gap-4 mt-4 flex-wrap">
              {slotArray?.map((slot, i) => (
                <Button key={i}>{slot}</Button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-4">
        <Button type="primary" onClick={() => setCurrent((prev) => prev + 1)}>
          Next
        </Button>
        <Button onClick={() => setCurrent((prev) => prev - 1)}>Previous</Button>
      </div>
    </div>
  );
};

export default StepTwoContent;
