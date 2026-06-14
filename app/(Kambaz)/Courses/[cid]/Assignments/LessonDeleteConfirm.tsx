import { Modal, Button } from "react-bootstrap";

export default function AssignmentDeleteConfirm(
  { show, handleClose, dialogTitle, deleteAssignment}:
  { show: boolean;
    handleClose: () => void;
    dialogTitle: string;
    deleteAssignment: () => void;
  }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <div>Are you Sure?</div>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="danger" onClick={() => { deleteAssignment(); handleClose(); }} > Yes </Button>
    <Button variant="primary" onClick={handleClose}> No </Button>
    </Modal.Footer>
  </Modal>
);}
