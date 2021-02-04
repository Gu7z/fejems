import { makeStyles } from "@material-ui/core";
import React from "react";
import { HomeAbout } from "../organisms/home_about";
import Numbers from "../organisms/numbers";
import History from "../organisms/history";
import Solutions from "../organisms/solutions";
import Contact from "../organisms/contact";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

function Homes() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <HomeAbout />
      <Numbers />
      <History />
      <Solutions />
      <Contact />
    </div>
  );
}

export default Homes;
