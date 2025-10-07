import { IoAdd, IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center ms-auto me-2" style={{ gap: '8px' }}>
      <div style={{ border: '1px solid black', borderRadius: '20px', padding: '5px 10px' }}>
        40% of Total
      </div>
      <IoAdd size={24} color="black" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
