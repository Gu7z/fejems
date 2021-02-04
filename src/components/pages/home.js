import { makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
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
  const refs = useRef([]);

  const addRef = (newRef) => {
    refs.current.push(newRef);
  };

  return (
    <div className={styles.root}>
      <HomeAbout addRefs={addRef} elements={refs} />
      <Numbers />
      <History addRefs={addRef} />
      <Solutions addRefs={addRef} />
      <Contact addRefs={addRef} />
    </div>
  );
}

export default Homes;
