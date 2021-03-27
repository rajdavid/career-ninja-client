import "./dashboard.scss";
import React, { useState } from "react";
import endpoint from "../../utility/endpoint";

import UserCreateModal from "../../components/modal";
import axios from "axios";
function UserProfile() {
  // user profile
  const [tableData, setTableData] = React.useState([]);
  const [active, setactive] = useState(false);
  React.useEffect(() => {
    // const alltableDatta =  axios.get(endpoint.getAllDataApi);
    //console.log('alltable data --', alltableDatta.data.data)
    axios
      .get(endpoint.getAllDataApi)
      .then((response) => {
        console.log(response.data.data);
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.log("error in api call", error);
      });
  }, []);
  const [showNavBar, setNavBar] = useState(true);
  const handleNavbar = async () => {
    setNavBar(!showNavBar);
  };
  return (
    <div className="dashboard">
     
      {showNavBar ? (
        <>
        
          <div className="left">
            <div className="divimage">
              <img src="/career.png" alt="" />
            </div>

            <div className="list">
              <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Admin Users</li>
                <li>Whatsapp</li>
              </ul>
            </div>
            <span className="actionbtn">LOGOUT</span>
          </div>{" "}
        </>
      ) : null}
      <div className="right">
        <div className="top">
          <span
            className="topbtn"
            onClick={() => {
              setactive(true);
            }}
          >
            Add User
          </span>
        </div>
        <div className="middle">
          <p className="head">Home</p>
          <p className="content">Admin-Users</p>
        </div>
        <div className="bottom">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Usertype</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.userType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {active ? <UserCreateModal /> : null}
    </div>
  );
}
export default UserProfile;
