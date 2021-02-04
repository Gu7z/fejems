import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
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

function HomeAbou() {
  const styles = useStyles();
  return (
    <Box
      style={{
        background: `url(${BackgroundHome}) `,
        backgroundSize: "cover",
        minHeight: "min-content",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <Box
        style={{
          backgroundColor: "rgba(0,0,0,.6)",
          margin: 0,
          padding: 0,
          height: "100vh",
          width: "100%",
          position: "absolute",
        }}
      >
        <Box style={{ gridArea: "about", marginTop: 40 }}>
          <NavBar />
        </Box>
        <Box
          style={{
            marginLeft: "12.5%",
            marginRight: "12.5%",
          }}
        >
          <Box
            style={{
              marginTop: 160,
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
          <Box marginTop={3}>
            <Button variant="outlined" className={styles.root}>
              CONTRATE UMA EMPRESA JÚNIOR
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeAbou;
