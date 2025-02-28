import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

// eslint-disable-next-line react/prop-types
const ToastAlert = ({ openSnack, icon, message, handleClose }) => {
  const SnackbarOrigin = {
    vertical: "top",
    horizontal: "right",
  };
  return (
    <>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={SnackbarOrigin}
      >
        <Alert
          onClose={handleClose}
          severity={icon}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ToastAlert;
