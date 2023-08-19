import Sidebar from "../components/Sidebar";
import {  Box } from "@mui/material";
import PostsData from "../components/PostsData";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
const styles = {
  MainBody: {
    display: "flex",
    minHeight: "80vh",
  },
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  heading: {
    color: "red",
  },
  message: {
    color: "red",
  },
};

const MainData = () => {
  const userDataString = localStorage.getItem("userData");
  const navigate = useNavigate()

  useEffect(() => {
    if (!userDataString) {
        alert("Please Enter your Credentials to Access the Data")
        return navigate("/")
     }  
  },[])
  

  return (
    <Box sx={styles.MainBody}>
      <Sidebar />
      <PostsData />
    </Box>
  );
};

export default MainData;
