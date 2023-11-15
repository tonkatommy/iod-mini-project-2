import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalCard from "../Layout/ModalCard";

export default function BasicModal({ watch }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        size="small"
        onClick={handleOpen}>
        More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalCard watch={watch} />
      </Modal>
    </>
  );
}
