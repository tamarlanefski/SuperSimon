import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { BsEye, BsEyeSlash,BsFillFileExcelFill } from "react-icons/bs";

interface ILogin {
  onClose: () => void;
  setUser: React.Dispatch<React.SetStateAction<{ name?: string; email?: string; password?: string; }>>
}

const Login: React.FC<ILogin> = (props) => {

  const [status, setStatus] = useState("signin");
  const [loginColor, setLoginColor] = useState("#b3b3b3");
  const [signinColor, setSigninColor] = useState("#243447");
  const formRef = useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string; email?: string }>({});

  const handleStatus = () => {
      setStatus(status === "signin" ? "login" : "signin");
    const tempColor = loginColor;
    setLoginColor(signinColor);
    setSigninColor(tempColor);
    setErrors({});
  }


  const sighLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);

    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }
      { status == "signin" ? onSignin(formData) : onLogin(formData) }
    }

  const onSignin = async (formData: FormData) => {
    const user = { name: formData.get("username")?.toString(), password: formData.get("password")?.toString() }
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      const data = [...res.data];
      const matchName = data.find((u: any)=> u.name == user.name );
        if (!matchName) {
          setErrors({ username: "שם משתמש אינו קיים" });
          return;
        }
       const matchPassword = data.find((u: any)=> u.password == user.password );
       if (!matchPassword) {
        setErrors({ password: "סיסמה לא תואמת" });
        return;
      }

        props.setUser(matchName);
      props.onClose();
    } catch (err) {
      console.log(err);  
    }
  }

  const onLogin = async (formData: FormData) => {
    const user = { name: formData.get("username")?.toString(), password: formData.get("password")?.toString(), email: formData.get("email")?.toString() }
    try {
      await axios.put("http://localhost:5000/api/users/addUser", user);
      props.setUser(user);
      props.onClose();
    } catch (err:any) {
      console.log("Error response:", err.response?.data);
      console.log(err.message+" error:"+ err);
      if (err.message.includes("password")) {
        alert("in pass")
        setErrors({ password: err.message });
      } else if (err.message.includes("name")) {
        alert("in name");
        setErrors({ username: err.message });
      } else {
        setErrors({ email: "האימייל אינו חוקי או שהמשתמש כבר קיים" });
      }
    }

  }
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Dialog
      open={true}
      onClose={() => { }} 
      aria-labelledby="login-dialog-title"
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          alignItems: "center",
          borderRadius: 3,
          boxShadow: 6,
          backgroundColor: "#f9f9f9"
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: 2, mt: 2, }}>
        <BsFillFileExcelFill onClick={props.onClose} fontSize={"3vw"} />
        <DialogTitle id="signin-dialog-title" sx={{ color: signinColor, cursor: "pointer"}} onClick={handleStatus}> signin</DialogTitle>
        <DialogTitle id="login-dialog-title" sx={{ color: loginColor, cursor: "pointer"}} onClick={handleStatus}>login</DialogTitle>
      </Box>
      <DialogContent>
        <Box
          component="form"
          noValidate
          onSubmit={sighLogin}
          ref={formRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <TextField name="username" label="user name" variant="outlined" fullWidth required    error={!!errors.username} helperText={errors.username}/>
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            error={!!errors.password} helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {status == "login" ? <TextField name="email" label="email" variant="outlined" type="email" fullWidth required error={!!errors.email} helperText={errors.email} /> : ''}
          <DialogActions>
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#243447" }}>
              {status}
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>

    </Dialog>
  );
};

export default Login;
