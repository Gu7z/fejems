import { makeStyles } from "@material-ui/core";
import React from "react";
import { HomeAbout } from "../organisms/home_about";
import Numbers from "../organisms/numbers";
import History from "../organisms/history";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "100vh 224px 824px 0 0",
    gridTemplateAreas: `
    'about'
    'numbers'
    'history'
    'solutions'
    'contact'
    `,
  },
});

function Homes() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <HomeAbout />
      <Numbers />
      <History />
      {/* <Solutions /> */}
    </div>
  );
}

export default Homes;
