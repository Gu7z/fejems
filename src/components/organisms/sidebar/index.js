import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

function SideBar({ elements, open, setClose }) {
  const scrollTo = (index) => {
    setTimeout(() => {
      elements.current[index].scrollIntoView({
        behavior: "smooth",
      });
    }, 250);
  };
  return (
    <Drawer anchor="right" open={open} onClose={setClose}>
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={setClose}
        onKeyDown={setClose}
      >
        <List>
          {["Home", "Quem Somos", "Serviços", "Contato"].map((text, index) => (
            <div key={`${text}-${index}`}>
              <ListItem onClick={() => scrollTo(index)} button key={text}>
                <ListItemIcon>{null}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar;
