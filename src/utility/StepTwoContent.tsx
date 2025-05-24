import { Button, DatePicker, Divider, type DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
type StepOneContentPropType = {
  selectedDate: Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  selectedSlot: string | undefined;
  setSelectedSlot: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const StepTwoContent = ({ selectedDate, setSelectedDate, selectedSlot, setSelectedSlot }: StepOneContentPropType) => {
  const onChange: DatePickerProps["onChange"] = (date) => {
    // console.log(date.format("DD/MM/YYYY"), date.format("ddd"));
    setSelectedDate(date);
  };
  const disablePastDates = (current: Dayjs) => {
    return current < dayjs().startOf("day");
  };
  const { doctorsWeeklySchedule, doctersDetails, bookedSlotsDetails } = useDoctorDetails();
  const [slotArray, setSlotArray] = useState<React.ReactNode[]>();

  const calculateAvailableSlots = (): string[] => {
    //match selected Date's week with the doctorScheduledWeek
    const weekData = doctorsWeeklySchedule.find(
      (weekData) => weekData.dayOfWeek.toLowerCase() == selectedDate.format("ddd").toLowerCase()
    );
    const isAvailable = weekData?.isAvailable;
    const slotStartTime = weekData?.slotStartTime;
    const slotEndTime = weekData?.slotEndTime;
    const slotDuration = doctersDetails.find((doctor) => doctor.doctorId == "1")?.slotDuration || 30;
    const BookedSlots: string[] =
      bookedSlotsDetails.find((item) => selectedDate?.isSame(item.date, "date"))?.bookedSlots || [];

    //calculate total slots
    const TotalSlots: string[] = [];
    const start = dayjs(slotStartTime, "hh:mm:A");
    const end = dayjs(slotEndTime, "hh:mm:A");
    for (let current = start; current.isBefore(end) && isAvailable; current = current.add(slotDuration, "minute")) {
      console.log(current);
      TotalSlots.push(current.format("hh:mm:A"));
    }
    return TotalSlots.filter((slot) => !BookedSlots.includes(slot));
  };

  useEffect(() => {
    const AvailableSlots: string[] = calculateAvailableSlots();
    setSlotArray(AvailableSlots);
  }, [selectedDate]);

  return (
    <>
      <div className="flex gap-2 items-center justify-between mb-4">
        <h1 className="text-lg ">Pick A Slot</h1>
        <div className="flex items-center gap-2">
          <label className="text-sm" htmlFor="selectDate">
            Select Date:
          </label>
          <DatePicker
            id="selectDate"
            allowClear={false}
            defaultOpen
            disabledDate={disablePastDates}
            onChange={onChange}
          />
        </div>
      </div>
      <Divider />
      {slotArray?.length === 0 ? (
        <div className="text-center font-bold">No Available Slot</div>
      ) : (
        <div>
          <h1 className=" font-bold mb-4">Available Slots for Date: {selectedDate.format("DD/MM/YYYY")}</h1>
          <div className="flex gap-4 mt-4 flex-wrap">
            {slotArray?.map((slot, i) => (
              <Button key={i} onClick={() => setSelectedSlot(slot?.toString())}>
                {slot}
              </Button>
            ))}
          </div>

          {selectedSlot && (
            <div>
              <Divider />
              <p className="font-bold">{`Selected Slot : ${selectedSlot} / ${selectedDate.format("Do MMM YYYY")}`}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default StepTwoContent;
