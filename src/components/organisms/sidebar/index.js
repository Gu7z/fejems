import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

function SideBar({ elements, open, setClose }) {
  const history = useHistory();

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
              {index === elements.current.length - 2 && (
                <>
                  <ListItem
                    onClick={() => history.push("/crie-sua-ej")}
                    button
                    key={text}
                  >
                    <ListItemIcon>{null}</ListItemIcon>
                    <ListItemText
                      style={{
                        textTransform: "uppercase",
                      }}
                      primary="Crie sua EJ"
                    />
                  </ListItem>
                  <Divider />
                </>
              )}
              <ListItem onClick={() => scrollTo(index)} button key={text}>
                <ListItemIcon>{null}</ListItemIcon>
                <ListItemText
                  style={{
                    textTransform: "uppercase",
                  }}
                  primary={text}
                />
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
