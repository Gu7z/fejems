import React from "react";
import { Box, Typography } from "@material-ui/core";

function Numbers() {
  return (
    <Box
      gridArea="numbers"
      style={{
        height: "100%",
        display: "grid",
        gridTemplateRows: `56px 64px`,
        gridTemplateColumns: `calc(100% / 3)`,
        gridTemplate: `
            'title title title' 
            'sub1 sub2 sub3' 
        `,
        marginTop: 50,
        placeItems: "center",
      }}
    >
      <Box gridArea="title">
        <Typography
          style={{ fontSize: 32, fontWeight: 900, fontFamily: "Nunito" }}
        >
          NÚMEROS DA NOSSA FEDERAÇÃO
        </Typography>
      </Box>
      <Box gridArea="sub1" display="flex" alignItems="flex-end">
        <div
          style={{
            marginRight: 8,
            fontSize: 24,
            fontWeight: 900,
            fontFamily: "Nunito",
          }}
        >
          26
        </div>
        <Typography
          style={{ color: "#0e60c6", fontSize: 16, fontFamily: "Nunito" }}
        >
          EMPRESAS JUNIORES
        </Typography>
      </Box>
      <Box gridArea="sub2" display="flex" alignItems="flex-end">
        <div
          style={{
            marginRight: 8,
            fontSize: 24,
            fontWeight: 900,
            fontFamily: "Nunito",
          }}
        >
          +400
        </div>
        <Typography
          style={{ color: "#0e60c6", fontSize: 16, fontFamily: "Nunito" }}
        >
          EMPRESÁRIOS JUNIORES
        </Typography>
      </Box>
      <Box gridArea="sub3" display="flex" alignItems="flex-end">
        <div
          style={{
            marginRight: 8,
            fontSize: 24,
            fontWeight: 900,
            fontFamily: "Nunito",
          }}
        >
          5
        </div>
        <Typography
          style={{ color: "#0e60c6", fontSize: 16, fontFamily: "Nunito" }}
        >
          INSTITUIÇÕES DE ENSINO
        </Typography>
      </Box>
    </Box>
  );
}

export default Numbers;
