import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

function SideBar({ open, setClose }) {
  console.log(open);
  return (
    <Drawer anchor="right" open={open} onClose={setClose}>
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={setClose}
        onKeyDown={setClose}
      >
        <List>
          {["Home", "Quem Somos", "Serviços", "Sua ej"].map((text, index) => (
            <>
              <ListItem button key={text}>
                <ListItemIcon>{null}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar;
