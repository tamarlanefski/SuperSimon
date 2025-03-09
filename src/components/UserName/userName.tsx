import { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsPersonCircle } from "react-icons/bs";
import Login from "../Login/login";

const UserNameBox = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // מצב פתיחה של הפופאפ
  const [user, setUser] = useState<{ name?: string, email?: string, password?: string }>({});

  const handleLoginClick = () => {
    setIsLoginOpen(true); // פתיחת הפופאפ
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false); // סגירת הפופאפ
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "10px",
          left: "10px",
          backgroundColor: "#f0f0f0",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          display: "flex",
        }}
      >
        <BsPersonCircle
          style={{ fontSize: "4vh", paddingInlineEnd: "1.5vh" }}
          onClick={handleLoginClick} // קריאה לפונקציה בעת לחיצה
        />
        <Typography variant="body1" style={{ fontFamily: 'cursive', top: '5px' }}>hello {user?.name}</Typography>
      </Box>

      {isLoginOpen && <Login onClose={handleLoginClose} setUser={setUser}/>}
    </>
  );
};

export default UserNameBox;
