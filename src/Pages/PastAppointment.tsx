import { Badge, Button, DatePicker, Layout, Select, Table } from "antd";
import { Header } from "antd/es/layout/layout";
import MyDropDown from "../utility/DropDown";
import { BellOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import { useDoctorDetails } from "../hooks/useDoctorDetails";
import type { DefaultOptionType } from "antd/es/select";
import { useState } from "react";

const PastAppointment = () => {
  const { bookedSlotsDetails, doctersDetails, nurseDetails } = useDoctorDetails();
  const { RangePicker } = DatePicker;
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  const [selectedCaregivers, setSelectedCaregivers] = useState<string[]>([]);
  const columns = [
    {
      title: "Date & Time",
      dataIndex: "slot",
      key: "slot",
      width: "20%",
    },
    {
      title: "Doctor",
      dataIndex: "doctorName",
      key: "doctorName",
      width: "20%",
    },
    {
      title: "CareGiver",
      dataIndex: "caregiver",
      key: "caregiver",
      width: "50%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "10%",
    },
  ];

  const handleRangeDateSelection = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };
  const dataSource = bookedSlotsDetails.flatMap((dateItem) => {
    return dateItem.slotInfo.map((slot) => {
      return {
        key: slot.slotTime + " " + dateItem.date,
        date: dateItem.date,
        slot: dayjs(dateItem.date).format("Do MMMM YYYY ") + " - " + dayjs(slot.slotTime).format("hh:mm:A"),
        doctorName: dateItem.doctorName,
        caregiver: "Nurse",
        action: (
          <Button type="default" style={{ borderRadius: "4px" }}>
            View Details
          </Button>
        ),
      };
    });
  });

  const filteredList = dataSource
    .filter((item) => {
      if (startDate && endDate) {
        let currDate = dayjs(item.date);
        if (
          (currDate.isAfter(startDate) || currDate.isSame(startDate)) &&
          (currDate.isBefore(endDate) || currDate.isSame(endDate))
        ) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    })
    .filter((item) => {
      if (selectedDoctors.length === 0) {
        return true;
      } else {
        return selectedDoctors.includes(item.doctorName);
      }
    })
    .filter((item) => {
      if (selectedCaregivers.length === 0) {
        return true;
      } else {
        return selectedCaregivers.includes(item.caregiver);
      }
    });

  return (
    <Layout className="bg-white">
      <Header className="bg-white ">
        <div className="flex items-center justify-between h-full">
          <p className="text-3xl ">Appointment Records</p>
          <div className="flex justify-center items-center gap-3">
            <Badge count={0} showZero>
              <BellOutlined className="text-2xl" />
            </Badge>
            <MyDropDown />
          </div>
        </div>
      </Header>
      <section className="min-h-16 flex justify-between items-center text-black mx-8 mt-4 mb-8">
        <div className="flex w-full gap-6">
          <RangePicker className="w-3/4 " onChange={handleRangeDateSelection} format="DD-MM-YYYY" />
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select Doctor"
            options={doctersDetails.map((doctor) => {
              return {
                label: doctor.doctorName,
                value: doctor.doctorId,
              } as DefaultOptionType;
            })}
            onChange={(e) => setSelectedDoctors(e)}
          />
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select caregiver"
            options={nurseDetails.map((nurse) => {
              return {
                label: nurse.nurseFirstName + " " + nurse.nurseLastName,
                value: nurse.nurseId,
              } as DefaultOptionType;
            })}
            onChange={(e) => setSelectedCaregivers(e)}
          />
        </div>
      </section>
      <Table
        className="mx-4 "
        columns={columns}
        dataSource={filteredList}
        bordered
        scroll={{ x: true }}
        pagination={{ pageSize: 8 }}
      />
    </Layout>
  );
};

export default PastAppointment;
