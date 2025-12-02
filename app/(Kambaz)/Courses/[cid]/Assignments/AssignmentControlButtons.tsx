import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import { RootState } from "../../../store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [studentView, setstudentView] =  useState(true);

  useEffect(() => {
    if ( currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") {
        setstudentView(false);
    } else {
        setstudentView(true);
    }
  }, [currentUser]);

  return (
    <div className="d-flex align-items-center ms-auto me-2" style={{ gap: '8px' }}>
      <div style={{ border: '1px solid black', borderRadius: '20px', padding: '5px 10px' }}>
        40% of Total
      </div>
      {!studentView &&
      <>
        <IoAdd size={24} color="black" />
        <IoEllipsisVertical className="fs-4" />
      </>
      }
    </div>
  );
}
