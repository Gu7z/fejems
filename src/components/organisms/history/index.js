import React from "react";
import { Box, Typography } from "@material-ui/core";
import BackgroundHistory from "../../../images/aula.png";

function History() {
  return (
    <Box
      gridArea="history"
      style={{
        background: `url(${BackgroundHistory}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100%",
          color: "white",
          display: "grid",
          gridTemplateRows: "288px 228px 160px",
          gridTemplateColumns: "calc(100% / 2)",
          gridTemplate: `
            'first first' 
            'second thrd'
            'fourth fourth' 
        `,
          placeItems: "center",
          backgroundColor: "rgba(0,0,0,.6)",
        }}
      >
        <Box gridArea="first" textAlign="center">
          <Typography style={{ fontSize: 32, fontWeight: 900 }}>
            ESSA É A NOSSA HISTÓRIA
          </Typography>
          <Box width={660} marginTop={2}>
            <Typography>
              Fundada em 2014, a Federação de Empresas Juniores do estado de
              Mato Grosso do Sul ou apenas FEJEMS é uma associação que trabalha
              todos os dias para REPRESENTAR e POTENCIALIZAR às Empresas
              Juniores que representamos. Formadas por estudantes universitários
              que realizam projetos e prestam consultoria para os mais diversos
              tipos de clientes, com preços acessíveis, e qualidade garantida
              com mais de 400 consultores treinados para atendê-lo!
            </Typography>
          </Box>
        </Box>
        <Box gridArea="second" textAlign="center">
          <Typography style={{ fontSize: 32, fontWeight: 900 }}>
            MISSÃO
          </Typography>
          <Box width={360} marginTop={2}>
            <Typography>
              FORMAR LÍDERES que irão transformar o Mato Grosso do Sul,
              FORTALECENDO e POTENCIALIZANDO o MEJ MS, trabalhando pelo
              DESENVOLVIMENTO e EXPANSÃO do ecossistema no estado
            </Typography>
          </Box>
        </Box>
        <Box gridArea="thrd" textAlign="center">
          <Typography style={{ fontSize: 32, fontWeight: 900 }}>
            VISÃO
          </Typography>
          <Box width={360} marginTop={2}>
            <Typography>
              Ser uma federação de ALTO IMPACTO estimulando a CONEXÃO DO
              ECOSSISTEMA, potencializando a EDUCAÇÃO EMPREENDEDORA e fazer
              nascer o ORGULHO DE SER CARDUME
            </Typography>
          </Box>
        </Box>
        <Box gridArea="fourth" textAlign="center" fontSize="40px" width={600}>
          UMA PAIXÃO QUE NOS UNE UM MOVIMENTO QUE NOS TRANSFORMA
        </Box>
      </Box>
    </Box>
  );
}

export default History;
