import "./dashboard.scss";
import React, { useState } from "react";
import endpoint from "../../utility/endpoint";

import UserCreateModal from "../../components/modal";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//import Drawer from '@material-ui/core/Drawer';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";

//import AddIcon from '@material-ui/icons/Add';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function UserProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(!open);
  };

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
      {/* {showNavBar ? (
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
      ) : null} */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <br></br>
        {/* <div className="divimage">
          <img src="/career.png" alt="" />
        </div> */}
        <List>
          <ListItem button key="Add">
            {/* <ListItemIcon>
                              <h1>david raj</h1>
                            </ListItemIcon> */}
            <ListItemText primary="Add" />
          </ListItem>
        </List>
      </Drawer>
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
