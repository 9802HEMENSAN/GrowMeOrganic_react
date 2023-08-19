import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";
 
const styles = {
  nav: {
    position: "sticky",
    top: "0px",
    backgroundColor: "black",
    ZIndex: 1000,
  },
  navbar: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
  },
  navItem: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
  },
};

const Navbar = () => {
  const userDataString = localStorage.getItem("userData");
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <AppBar position="static" sx={styles.nav}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.navbar}>
          <Link component={RouterLink} to="/" sx={styles.navItem}>
            Login
          </Link>
          <Link component={RouterLink} to="/data" sx={styles.navItem}>
            Blog
          </Link>

          {userDataString && (
            <Button variant="contained" onClick={LogOut}>
              LogOut
            </Button>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
