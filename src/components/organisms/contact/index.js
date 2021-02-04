import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

function contact() {
  return (
    <Box
      gridArea="contact"
      style={{
        backgroundColor: "#191919",
        minHeight: "560px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          placeItems: "center",
          color: "#222",
          width: "max-content",
        }}
      >
        <Box
          padding="16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="calc(50% - 32px)"
        >
          <Box
            component={Typography}
            color="white"
            style={{
              fontSize: 48,
              marginBottom: 16,
            }}
          >
            QUER SABER MAIS?
          </Box>
          <Box
            component={Typography}
            color="#1976d2"
            style={{
              fontSize: 20,
              marginBottom: 16,
            }}
          >
            NOS MANDE UMA MENSAGEM E VAMOS BATER UM PAPO (;
          </Box>
          <Box component={Typography} color="white">
            Redes sociais aqui em breve
          </Box>
        </Box>
        <Box
          width="50%"
          color="white"
          component="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          onSubmit={(event) => event.preventDefault()}
        >
          <Box display="flex" flexDirection="column" marginTop={3}>
            Nome
            <Box
              fontSize={20}
              component="input"
              maxWidth={500}
              width={400}
              height={40}
            />
          </Box>
          <Box display="flex" flexDirection="column" marginTop={3}>
            Email
            <Box fontSize={20} component="input" width={400} height={40} />
          </Box>
          <Box display="flex" flexDirection="column" marginTop={3}>
            Mensagem
            <Box
              fontSize={20}
              component="textarea"
              width={400}
              height={120}
              style={{ resize: "none" }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: 24,
              width: 224,
              height: 59,
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default contact;
