import React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core";
import NavBar from "../organisms/create_ej_navbar";
import { useHistory } from "react-router-dom";

function CreateEj() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const history = useHistory();

  const elementsIds = ["Home", "History", "Solutions", "Contact"];
  const infos = [
    {
      title: "PROCESSO DE FUNDAÇÃO",
      subTitle: "Para Grupos de Alunos Interessados",
      information: "DESDE O BÁSICO",
      about: [
        "Confecção de documentos",
        "Modelo de Negócios",
        "Alinhamento com a Rede Gestão Interna",
      ],
    },
    {
      title: "PROCESSO UNIFICADO DE FILIAÇÃO",
      subTitle: "Para Empresas Juniores Com CNPJ",
      information: "ACELERAÇÃO",
      about: [
        "Regulamentação",
        "Cultura Empreendedora",
        "Execução Conexão com o MEJ",
      ],
    },
    {
      title: "PROCESSO DE IGNIÇÃO",
      subTitle: "Para Universidades Empreendedoras",
      information: "COMPLETO",
      about: [
        "Palestras",
        "Eventos",
        "Suporte à fundação da Empresa Júnior",
        "Conexão",
      ],
    },
  ];

  return (
    <Box
      id="crie-sua-ej"
      style={{
        display: "flex",
        backgroundSize: "cover",
        minHeight: "100vh",
        height: "max-content",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          height: "max-content",
          width: "100%",
        }}
      >
        <Box style={{ marginTop: matches ? 24 : 8 }}>
          <NavBar elementsIds={elementsIds} />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box maxWidth={1000} marginTop={4} textAlign="center">
            <Box fontSize={40}>
              QUER ABRIR UMA EMPRESA JÚNIOR? FAZ PARTE DE UMA EMPRESA JÚNIOR NÃO
              FEDERADA? VENHA SER FEJEMS!
            </Box>
            <Box fontFamily="Nunito-Light" marginTop={3} fontSize={20}>
              A FEJEMS oferece suporte para grupos de universitários que tenham
              interesse em fundar uma Empresa Júnior, para membros de Empresas
              Juniores que ainda não são filiados à Federação, e para
              Universidades que tenham interesse em desenvolver seu ecossistema
              empreendedor por meio da fundação de uma Empresa Júnior!
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" marginTop={8}>
            {infos.map((info, index) => (
              <Box
                key={`info-title-${index}`}
                maxWidth="366px"
                textAlign="center"
                marginBottom="32px"
                paddingX="32px"
              >
                <Box fontWeight={24} fontSize={24}>
                  {info.title}
                </Box>
                <Box
                  fontFamily="Nunito-Light"
                  fontSize={20}
                  color="#1976d2"
                  fontWeight="900"
                >
                  {info.subTitle}
                </Box>
                <Box fontWeight={24} margin="40px 0">
                  {info.information}
                </Box>
                <Box fontFamily="Nunito-Light" fontSize={16} paddingX="12%">
                  {info.about.map((about, aboutIndex) => (
                    <Box key={`about-${index}-${aboutIndex}`}>{about}</Box>
                  ))}
                </Box>
                <Box marginTop="32px">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: 24,
                      marginBottom: 24,
                      width: 224,
                      height: 59,
                    }}
                    onClick={() => {
                      history.push({
                        pathname: "/",
                        hash: `#Contact`,
                      });
                    }}
                  >
                    VAMOS JUNTOS
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateEj;
