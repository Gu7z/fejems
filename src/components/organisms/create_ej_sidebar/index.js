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

function SideBar({ elementsIds, open, setClose }) {
  const history = useHistory();

  return (
    <Drawer anchor="right" open={open} onClose={setClose}>
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={setClose}
        onKeyDown={setClose}
      >
        <List>
          {["Home", "Quem Somos", "Serviços", "Crie Sua Ej", "Contato"].map(
            (text, index) => (
              <div key={`${text}-${index}`}>
                {index === elementsIds.length - 1 && (
                  <>
                    <ListItem button key={text}>
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
                <ListItem
                  onClick={() => {
                    history.push({
                      pathname: "/",
                      hash: `#${elementsIds[index]}`,
                    });
                  }}
                  button
                  key={text}
                >
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
            )
          )}
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar;
