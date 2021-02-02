import React, { useState } from "react";
import "./style.css";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@material-ui/core";
import Logo from "../../../images/logo_fejems.png";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from "../sidebar";

const useStyles = makeStyles({
  root: {
    display: "grid",
    marginLeft: "12.5%",
    marginRight: "12.5%",
    gridTemplateAreas: `
    'header'
    'about'
    'numbers'
    'history'
    'solutions'
    'contact'
    `,
  },
  link: {
    textDecoration: "none",
    color: "initial",

    // "&:hover": {
    //   background: "none repeat scroll 0 0 transparent",
    //   bottom: 0,
    //   content: "",
    //   display: "block",
    //   height: "2px",
    //   left: "50%",
    //   position: "absolute",
    //   transition: "width 0.3s ease 0s, left 0.3s ease 0s",
    //   width: 0,
    // },
    // "&:after:hover": {
    //   width: "100%",
    //   left: 0,
    // },
  },
});

// a:hover:after {
//   width: 100%;
//   left: 0;
// }

function Navbar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar
      color="transparent"
      style={{
        gridArea: "header",
        boxShadow: "none",
      }}
      className="app_bar"
      position="static"
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "12.5%",
          marginLeft: "12.5%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img className="logo_imagem" src={Logo} alt="logo_imagem" />
          <Typography style={{ marginLeft: 8, fontSize: 24, fontWeight: 700 }}>
            FEJEMS
          </Typography>
        </div>
        {matches ? (
          <div style={{ display: "flex" }}>
            <Link className={styles.link}>
              <Typography
                style={{
                  marginRight: 24,
                  color: "white",
                  letterSpacing: "0.2rem",
                }}
              >
                HOME
              </Typography>
            </Link>
            <Link className={styles.link}>
              <Typography
                style={{
                  marginRight: 24,
                  color: "white",
                  letterSpacing: "0.2rem",
                }}
              >
                QUEM SOMOS
              </Typography>
            </Link>
            <Link className={styles.link}>
              <Typography
                style={{
                  marginRight: 24,
                  color: "white",
                  letterSpacing: "0.2rem",
                }}
              >
                CRIE SUA EJ
              </Typography>
            </Link>
            <Link className={styles.link}>
              <Typography
                style={{
                  marginRight: 24,
                  color: "white",
                  letterSpacing: "0.2rem",
                }}
              >
                FALE CONOSCO
              </Typography>
            </Link>
          </div>
        ) : (
          <IconButton onClick={() => setOpenSideBar(true)}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        )}
      </Toolbar>
      <SideBar open={openSideBar} setClose={() => setOpenSideBar(false)} />
    </AppBar>
  );
}

export default Navbar;
