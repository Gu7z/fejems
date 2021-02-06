import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import BackgroundHistory from "../../../images/aula.png";

function History({ addRefs }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      id="History"
      ref={addRefs}
      style={{
        display: "flex",
        background: `url(${BackgroundHistory}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "max-content",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "max-content",
          color: "white",
          backgroundColor: "rgba(0,0,0,.6)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: "calc(100% - 16px)",
            padding: "0 16px",
            maxWidth: matches && 1000,
          }}
        >
          <Box textAlign="center" marginTop="32px">
            <Typography
              style={{ fontSize: matches ? 32 : 16, fontWeight: 900 }}
            >
              ESSA É A NOSSA HISTÓRIA
            </Typography>
            <Box maxWidth="100%" marginTop={2}>
              <Typography>
                Fundada em 2014, a Federação de Empresas Juniores do estado de
                Mato Grosso do Sul ou apenas FEJEMS é uma associação que
                trabalha todos os dias para REPRESENTAR e POTENCIALIZAR às
                Empresas Juniores que representamos. Formadas por estudantes
                universitários que realizam projetos e prestam consultoria para
                os mais diversos tipos de clientes, com preços acessíveis, e
                qualidade garantida com mais de 400 consultores treinados para
                atendê-lo!
              </Typography>
            </Box>
          </Box>
          <Box
            marginTop={4}
            display="flex"
            flexWrap="wrap"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Box textAlign="center" width="50%">
              <Typography style={{ fontSize: 32, fontWeight: 900 }}>
                MISSÃO
              </Typography>
              <Box marginTop={2}>
                <Typography>
                  FORMAR LÍDERES que irão transformar o Mato Grosso do Sul,
                  FORTALECENDO e POTENCIALIZANDO o MEJ MS, trabalhando pelo
                  DESENVOLVIMENTO e EXPANSÃO do ecossistema no estado
                </Typography>
              </Box>
            </Box>
            <Box textAlign="center" width="50%">
              <Typography style={{ fontSize: 32, fontWeight: 900 }}>
                VISÃO
              </Typography>
              <Box marginTop={2}>
                <Typography>
                  Ser uma federação de ALTO IMPACTO estimulando a CONEXÃO DO
                  ECOSSISTEMA, potencializando a EDUCAÇÃO EMPREENDEDORA e fazer
                  nascer o ORGULHO DE SER CARDUME
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            marginBottom={8}
            maxWidth="100%"
            marginTop={3}
          >
            <Typography
              width={600}
              style={{ fontSize: 40, textAlign: "center" }}
            >
              UMA PAIXÃO QUE NOS UNE UM MOVIMENTO QUE NOS TRANSFORMA
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default History;
