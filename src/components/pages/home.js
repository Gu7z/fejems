import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { HomeAbout } from "../organisms/home_about";
import Numbers from "../organisms/numbers";
import History from "../organisms/history";
import Solutions from "../organisms/solutions";
import Contact from "../organisms/contact";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

function Homes() {
  const styles = useStyles();
  const refs = useRef([]);
  const location = useLocation();

  const addRef = (newRef) => {
    refs.current.push(newRef);
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div className={styles.root}>
      <HomeAbout addRefs={addRef} elements={refs} />
      <Numbers />
      <History addRefs={addRef} />
      <Solutions addRefs={addRef} elements={refs} />
      <Contact addRefs={addRef} />
    </div>
  );
}

export default Homes;
