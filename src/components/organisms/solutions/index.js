import React from "react";
import { Box, Typography } from "@material-ui/core";

function Solutions({ addRefs }) {
  const values = [
    {
      title: "NEGÓCIOS",
      subTitle:
        "Plano de Negócios, Pesquisas de Mercado, Valuation, Plano de Marketing",
    },
    {
      title: "TECNOLOGIA",
      subTitle:
        "Sites, Sistemas, Aplicativos, Sistemas Embarcados, Protótipos, Consultoria em TI",
    },

    {
      title: "ENGENHARIAS",
      subTitle:
        "Projetos Mecânicos, Elétricos, Hidráulicos, Estruturais, Engenharia Química, Engenharia de Alimentos",
    },
    {
      title: "NATUREZA/SAÚDE",
      subTitle:
        "Análises Químicas, Análises de Água, Meteorologia, Desenvolvimento de Cosméticos, Rotulagem",
    },
    {
      title: "AGRÁRIAS",
      subTitle:
        "Consultoria em Produção Animal e Vegetal, Análises de Solo, Viabilidade de Produção, Gestão de Negócios e Propriedades",
    },
    {
      title: "HUMANAS",
      subTitle:
        " Recrutamento e Seleção, Consultoria em Gestão de Pessoas, Relações Públicas e Comunicação, Revisões de Texto",
    },
  ];

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
      <Box display="flex" flexDirection="column" maxWidth="1000px">
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
          {values.map(({ title, subTitle }, index) => (
            <Box key={`title-${index}`} height="178px" flex="1 0 50%">
              <Typography
                style={{ fontSize: 24, textAlign: "center", fontWeight: 900 }}
              >
                {title}
              </Typography>
              <Box marginTop={1}>
                <Typography style={{ textAlign: "center", color: "#888" }}>
                  {subTitle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Solutions;
