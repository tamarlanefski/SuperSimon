import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsPersonCircle } from "react-icons/bs";
import LoginPopup from "../Login/login";

const Login=()=>{
    console.log("sdfghjkhgfhjhh")
    return <LoginPopup/>
}

const UserNameBox = () => {
    const userName = "tzipi";
    return (
        <Box
            sx={{
                position: "fixed",
                top: "10px",
                left: "10px",
                backgroundColor: "#f0f0f0",
                padding: "10px 20px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                display: 'flex'
            }}
        >
            <BsPersonCircle style={{ fontSize: '4vh', paddingInlineEnd: '1.5vh' }} onClick={Login} />
            <Typography variant="body1" style={{ fontFamily: 'cursive', top: '5px' }}>hello {userName}!</Typography>
        </Box>
    );
}

export default UserNameBox;