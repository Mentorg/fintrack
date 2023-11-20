import { ReactNode, useState } from "react";
import { Box, Button, Modal, useTheme } from "@mui/material";
import ExpenseForm from "../features/budget/components/ui/ExpenseForm";
import { tokens } from "../assets/theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type BasicModalProps = {
  content: ReactNode
}

export default function BasicModal({ content }: BasicModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Button
        sx={{
          backgroundColor: colors.primary[500],
          borderRadius: "1rem",
          color: colors.primary[100],
          display: "flex",
          gap: "1rem",
          justifyContent: "start",
          padding: "1rem",
          width: "100%",
          "& .MuiBox-root": {
            alignItems: "center",
            display: "flex",
            gap: "1rem"
          },
          "&:hover": {
            backgroundColor: `${colors.primary[700]} !important`,
          },
        }}
        onClick={handleOpen}>
        {content}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ExpenseForm />
        </Box>
      </Modal>
    </>
  );
}
