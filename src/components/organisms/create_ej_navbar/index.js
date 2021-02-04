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
  Box,
} from "@material-ui/core";
import Logo from "../../../images/logo_fejems.png";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from "../create_ej_sidebar";
import { useHistory } from "react-router-dom";

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
  },
});

function Navbar({ elementsIds }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const history = useHistory();

  return (
    <AppBar
      color="transparent"
      style={{
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
            {["Home", "Quem Somos", "Serviços", "Contato"].map(
              (text, index) => (
                <Box key={`navbar-${index}`} display="flex">
                  {index === elementsIds.length - 1 && (
                    <Typography
                      className={styles.link}
                      style={{
                        marginRight: 24,
                        letterSpacing: "0.2rem",
                        cursor: "pointer",
                        fontFamily: "Nunito-Light",
                        textTransform: "uppercase",
                      }}
                    >
                      Crie sua EJ
                    </Typography>
                  )}
                  <Typography
                    key={index}
                    onClick={() => {
                      history.push({
                        pathname: "/",
                        hash: `#${elementsIds[index]}`,
                      });
                    }}
                    className={styles.link}
                    style={{
                      marginRight: 24,
                      letterSpacing: "0.2rem",
                      cursor: "pointer",
                      fontFamily: "Nunito-Light",
                      textTransform: "uppercase",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              )
            )}
          </div>
        ) : (
          <IconButton onClick={() => setOpenSideBar(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <SideBar
        elementsIds={elementsIds}
        open={openSideBar}
        setClose={() => setOpenSideBar(false)}
      />
    </AppBar>
  );
}

export default Navbar;
