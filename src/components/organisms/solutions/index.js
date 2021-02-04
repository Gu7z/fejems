import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@material-ui/core";

function Solutions({ addRefs }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      id="Solutions"
      ref={addRefs}
      style={{
        height: "100%",
        placeItems: "center",
        color: "#222",
        marginBottom: "64px",
        width: "100%",
      }}
    >
      <Box display="flex" flexDirection="column" maxWidth="720px">
        <Box
          gridArea="title"
          textAlign="center"
          marginBottom="24px"
          marginTop="24px"
        >
          <Typography style={{ fontSize: 40, fontWeight: 900 }}>
            PARA QUALQUER PROBLEMA, UMA EMPRESA JÚNIOR PODE SER SOLUÇÃO!
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Box height="178px" flex="1 0 50%">
            <Typography
              style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
            >
              NEGÓCIOS
            </Typography>
            <Box marginTop={1}>
              <Typography style={{ textAlign: "center", color: "#888" }}>
                Plano de Negócios, Pesquisas de Mercado, Valuation, Plano de
                Marketing
              </Typography>
            </Box>
          </Box>
          <Box height="178px" flex="1 0 50%">
            <Typography
              style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
            >
              TECNOLOGIA
            </Typography>
            <Box marginTop={1}>
              <Typography style={{ textAlign: "center", color: "#888" }}>
                Sites, Sistemas, Aplicativos, Sistemas Embarcados, Protótipos,
                Consultoria em TI
              </Typography>
            </Box>
          </Box>
          <Box height="178px" flex="1 0 50%">
            <Typography
              style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
            >
              ENGENHARIAS
            </Typography>
            <Box marginTop={1}>
              <Typography style={{ textAlign: "center", color: "#888" }}>
                Projetos Mecânicos, Elétricos, Hidráulicos, Estruturais,
                Engenharia Química, Engenharia de Alimentos
              </Typography>
            </Box>
          </Box>
          <Box height="178px" flex="1 0 50%">
            <Typography
              style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
            >
              NATUREZA/SAÚDE
            </Typography>
            <Box marginTop={1}>
              <Typography style={{ textAlign: "center", color: "#888" }}>
                Análises Químicas, Análises de Água, Meteorologia,
                Desenvolvimento de Cosméticos, Rotulagem
              </Typography>
            </Box>
          </Box>
          <Box height="178px" flex="1 0 50%">
            <Typography
              style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
            >
              AGRÁRIAS
            </Typography>
            <Box marginTop={1}>
              <Typography style={{ textAlign: "center", color: "#888" }}>
                Consultoria em Produção Animal e Vegetal, Análises de Solo,
                Viabilidade de Produção, Gestão de Negócios e Propriedades
              </Typography>
            </Box>
          </Box>
          <Box height="178px" flex="1 0 50%">
            <Typography
              style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
            >
              HUMANAS
            </Typography>
            <Box marginTop={1}>
              <Typography style={{ textAlign: "center", color: "#888" }}>
                Recrutamento e Seleção, Consultoria em Gestão de Pessoas,
                Relações Públicas e Comunicação, Revisões de Texto
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Solutions;
