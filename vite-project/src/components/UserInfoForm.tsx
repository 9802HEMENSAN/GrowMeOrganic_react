 
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import "../App.css"
const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phoneNumber && email) {
      const userData = { name, phoneNumber, email };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Login Successful !")

      setTimeout(() => {
        navigate("/data");
      }, 3000);
    }
  };

  return (
    <div className="form-container" >
      <h2>Enter Your Details</h2>
      <TextField
        className="input-field"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        className="input-field"
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
      />
      <TextField
        className="input-field"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <Button   className="submit-button" variant="contained" color="primary" onClick={handleSubmit}>
       Submit
      </Button>
    </div>
  );
};

export default UserInfoForm;
