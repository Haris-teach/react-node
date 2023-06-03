import React, { useState } from "react";
import "../authPages/style.css"; // Import the CSS file
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilePage = () => {
 

  const userData= JSON.parse(localStorage.getItem('userData'))


   const [firstName, setFirstName] = useState(userData?.user?.firstName);
   const [lastName, setLastName] = useState(userData?.user?.lastName);
   const [isCheck, setIsCheck] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
  

   let data={
    firstName:firstName,
    lastName:lastName
   }

    let res = await axios.put(" http://localhost:8080/api/v1/update", data, {
      headers: {
        "Content-Type": "application/json", // Example header
        Authorization: `Bearer ${userData?.authToken}`,
      },
    });
    if(res.status===200){
     setIsCheck(true)
    }

  };

  return (
    <div className="centered-form profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        {isCheck && <p>info successfully updated!</p>}

        <Link to="/">
          <p>back to dashboard</p>
        </Link>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfilePage;
