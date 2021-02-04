import React from "react";
import {
  Box,
  Button,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { NavBar } from "..";
import BackgroundHome from "../../../images/background_home.jpg";

const useStyles = makeStyles({
  root: {
    borderColor: "white",
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function HomeAbout({ addRefs, elements }) {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      id="Home"
      ref={addRefs}
      style={{
        display: "flex",
        background: `url(${BackgroundHome}) `,
        backgroundSize: "cover",
        minHeight: "100vh",
        height: "max-content",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <Box
        style={{
          backgroundColor: "rgba(0,0,0,.6)",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          height: "max-content",
          width: "100%",
        }}
      >
        <Box style={{ gridArea: "about", marginTop: matches ? 40 : 8 }}>
          <NavBar elements={elements} />
        </Box>
        <Box
          style={{
            marginLeft: "12.5%",
            marginRight: "12.5%",
          }}
        >
          <Box
            style={{
              marginTop: matches ? 160 : 8,
            }}
          >
            <Typography
              style={{ fontWeight: 900, fontSize: 40, maxWidth: 600 }}
            >
              VENHA CONHECER O CARDUME E PROVE DO JEITO PIRANHA
            </Typography>
          </Box>
          <Box marginTop={5}>
            <Typography style={{ fontSize: "130%", maxWidth: 600 }}>
              Alunos e alunas de graduação, das melhores Universidades do Mato
              Grosso do Sul, comprometidos e capazes para tornar seu sonho
              realidade!
            </Typography>
          </Box>
          <Box marginTop={3} marginBottom={3}>
            <Button variant="outlined" className={styles.root}>
              CONTRATE UMA EMPRESA JÚNIOR
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeAbout;
