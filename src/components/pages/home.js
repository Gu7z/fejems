import { makeStyles } from "@material-ui/core";
import React from "react";
import { HomeAbout } from "../organisms/home_about";

const useStyles = makeStyles({
  root: {
    display: "grid",
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
    </div>
  );
}

export default Homes;
