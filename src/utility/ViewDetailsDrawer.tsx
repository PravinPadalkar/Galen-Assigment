import type { ViewDetailsContentType } from "../Pages/PastAppointment";
type ViewDetailsDrawerProp = {
  viewDetailsContent: ViewDetailsContentType | undefined;
};

const ViewDetailsDrawer = ({ viewDetailsContent }: ViewDetailsDrawerProp) => {
  return <>MY Content</>;
};

export default ViewDetailsDrawer;
