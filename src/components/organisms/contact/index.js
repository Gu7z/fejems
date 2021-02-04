import { Box, Button, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import React from "react";

function contact({ addRefs }) {
  return (
    <Box
      ref={addRefs}
      id="Contact"
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
          justifyContent: "center",
        }}
      >
        <Box
          padding="16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="50%"
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
          <Box
            width="50%"
            display="flex"
            justifyContent="space-around"
            color="white"
          >
            <FacebookIcon fontSize="large" style={{ cursor: "pointer" }} />
            <LinkedInIcon fontSize="large" style={{ cursor: "pointer" }} />
            <WhatsAppIcon fontSize="large" style={{ cursor: "pointer" }} />
            <EmailIcon fontSize="large" style={{ cursor: "pointer" }} />
          </Box>
        </Box>
        <Box
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
            <Box fontSize={20} component="input" height={40} />
          </Box>
          <Box display="flex" flexDirection="column" marginTop={3}>
            Email
            <Box fontSize={20} component="input" height={40} />
          </Box>
          <Box display="flex" flexDirection="column" marginTop={3}>
            Mensagem
            <Box
              fontSize={20}
              component="textarea"
              height={120}
              style={{ resize: "none" }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: 24,
              marginBottom: 24,
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
