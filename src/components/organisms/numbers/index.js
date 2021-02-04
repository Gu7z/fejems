import React from "react";
import { Box, Typography } from "@material-ui/core";

function Numbers({ addRefs }) {
  return (
    <Box
      id="Numbers"
      ref={addRefs}
      style={{
        height: "256px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        placeItems: "center",
      }}
    >
      <Box>
        <Typography style={{ fontSize: 32, fontWeight: 900 }}>
          NÚMEROS DA NOSSA FEDERAÇÃO
        </Typography>
      </Box>
      <Box
        display="flex"
        width="800px"
        justifyContent="space-between"
        padding="24px"
      >
        <Box display="flex" alignItems="flex-end">
          <div
            style={{
              marginRight: 8,
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            26
          </div>
          <Typography style={{ color: "#0e60c6", fontSize: 16 }}>
            EMPRESAS JUNIORES
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <div
            style={{
              marginRight: 8,
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            +400
          </div>
          <Typography style={{ color: "#0e60c6", fontSize: 16 }}>
            EMPRESÁRIOS JUNIORES
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <div
            style={{
              marginRight: 8,
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            5
          </div>
          <Typography style={{ color: "#0e60c6", fontSize: 16 }}>
            INSTITUIÇÕES DE ENSINO
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Numbers;
