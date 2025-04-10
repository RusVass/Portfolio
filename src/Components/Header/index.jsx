
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <div>
        <AppBar
          sx={{
            position: "sticky",
            // backgroundColor: "#25171A",
            backgroundColor: "black",
            color: "white",
            heidth: "100px",
            top: "0",
          }}
          elevation={0}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%",
              boxSizing: "border-box",
              padding: "0 20px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink
              }
            >
                Profile
            </NavLink>
            <NavLink
              to="/about"
              exact
              className={({ isActive }) =>
                isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink
              }
            >
                Portfolio
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Header;
