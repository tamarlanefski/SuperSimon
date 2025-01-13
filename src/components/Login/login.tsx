import  { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

const LoginPopup = () => {
  const [open, setOpen] = useState(true); // ברירת מחדל: הפופאפ פתוח
 
  const handleClose = () => {
    // פונקציה לסגירת הפופאפ (לדוגמה: לאחר Login מוצלח)
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {}} // מונע סגירת הפופאפ בלחיצה מחוץ לחלון
      aria-labelledby="login-dialog-title"
      fullWidth
      maxWidth="xs" // גודל החלון

      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: 6,
        },
      }}

    >
      <DialogTitle id="login-dialog-title">התחברות</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="שם משתמש"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="סיסמה"
            variant="outlined"
            type="password"
            fullWidth
            required
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          התחבר
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginPopup;
