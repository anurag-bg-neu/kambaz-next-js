import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }:
  {
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void;
  } ) {

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [studentView, setstudentView] =  useState(true);

  useEffect(() => {
    if ( !currentUser ) {
      return;
    }
    if ( currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
        setstudentView(false);
    } else {
        setstudentView(true);
    }
  }, [currentUser]);

  return (
    <div className="float-end">
      {!studentView &&
      <>
        <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
        <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      </>
      }
      <GreenCheckmark />
      {!studentView &&
        <IoAdd size={24} color="black" />
      }
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
