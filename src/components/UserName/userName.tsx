import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
 import { BsPersonCircle } from "react-icons/bs";

const UserNameBox = () => {
    const userName = "sdf"
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
            }}
        >
            <BsPersonCircle/>
            <Typography variant="body1">שלום, {userName}!</Typography>
        </Box>
    );
}

export default UserNameBox;