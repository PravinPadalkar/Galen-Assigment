import type { modalData } from "../Helper/types";

type ModalPropType = {
  modalData: modalData | undefined;
};
const Modal = ({ modalData }: ModalPropType) => {
  return modalData ? (
    <div className="flex flex-col gap-3">
      <h1>
        <strong>Patient Name:</strong> {modalData.patientName}
      </h1>
      <p>
        <strong>Email ID:</strong> {modalData.email}
      </p>
      <p>
        <strong>Slot Time:</strong> {modalData.slotTime + " / " + modalData.slotDate}
      </p>
      <p>
        <strong>Doctor Name:</strong> {modalData.doctorName}
      </p>
      <p>
        <strong>Family Members:</strong> {modalData.familyMember}
      </p>
      <p>
        <strong>Note:</strong> {modalData.note}
      </p>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
