import React from "react";
import { Box, Typography } from "@material-ui/core";

function Solutions({ addRefs }) {
  return (
    <Box
      id="Solutions"
      ref={addRefs}
      style={{
        height: "100%",
        display: "grid",
        gridTemplate: `
        'title title title' 
        'sub1 sub2 sub3' 
        'sub4 sub5 sub6' 
    `,
        placeItems: "center",
        color: "#222",
        marginBottom: "64px",
      }}
    >
      <Box
        gridArea="title"
        textAlign="center"
        maxWidth="660px"
        marginBottom="24px"
        marginTop="24px"
      >
        <Typography style={{ fontSize: 40, fontWeight: 900 }}>
          PARA QUALQUER PROBLEMA, UMA EMPRESA JÚNIOR PODE SER SOLUÇÃO!
        </Typography>
      </Box>
      <Box
        height="178px"
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        gridArea="sub1"
      >
        <Typography
          style={{ fontSize: 24, textAlign: "left", fontWeight: 900 }}
        >
          NEGÓCIOS
        </Typography>
        <Box marginTop={1}>
          <Typography style={{ textAlign: "left", color: "#888" }}>
            Plano de Negócios, Pesquisas de Mercado, Valuation, Plano de
            Marketing
          </Typography>
        </Box>
      </Box>
      <Box
        height="178px"
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        gridArea="sub2"
      >
        <Typography style={{ fontSize: 24, fontWeight: 900 }}>
          TECNOLOGIA
        </Typography>
        <Box marginTop={1}>
          <Typography style={{ textAlign: "left", color: "#888" }}>
            Sites, Sistemas, Aplicativos, Sistemas Embarcados, Protótipos,
            Consultoria em TI
          </Typography>
        </Box>
      </Box>
      <Box
        height="178px"
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        gridArea="sub3"
      >
        <Typography style={{ fontSize: 24, fontWeight: 900 }}>
          ENGENHARIAS
        </Typography>
        <Box marginTop={1}>
          <Typography style={{ textAlign: "left", color: "#888" }}>
            Projetos Mecânicos, Elétricos, Hidráulicos, Estruturais, Engenharia
            Química, Engenharia de Alimentos
          </Typography>
        </Box>
      </Box>
      <Box
        height="178px"
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        gridArea="sub4"
      >
        <Typography style={{ fontSize: 24, fontWeight: 900 }}>
          NATUREZA/SAÚDE
        </Typography>
        <Box marginTop={1}>
          <Typography style={{ textAlign: "left", color: "#888" }}>
            Análises Químicas, Análises de Água, Meteorologia, Desenvolvimento
            de Cosméticos, Rotulagem
          </Typography>
        </Box>
      </Box>
      <Box
        height="178px"
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        gridArea="sub5"
      >
        <Typography style={{ fontSize: 24, fontWeight: 900 }}>
          AGRÁRIAS
        </Typography>
        <Box marginTop={1}>
          <Typography style={{ textAlign: "left", color: "#888" }}>
            Consultoria em Produção Animal e Vegetal, Análises de Solo,
            Viabilidade de Produção, Gestão de Negócios e Propriedades
          </Typography>
        </Box>
      </Box>
      <Box
        height="178px"
        maxWidth="80%"
        display="flex"
        flexDirection="column"
        gridArea="sub6"
      >
        <Typography style={{ fontSize: 24, fontWeight: 900 }}>
          HUMANAS
        </Typography>
        <Box marginTop={1}>
          <Typography style={{ textAlign: "left", color: "#888" }}>
            Recrutamento e Seleção, Consultoria em Gestão de Pessoas, Relações
            Públicas e Comunicação, Revisões de Texto
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Solutions;
