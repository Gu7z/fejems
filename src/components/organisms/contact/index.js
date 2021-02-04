import { Box, Button, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
// import EmailIcon from "@material-ui/icons/Email";
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
          maxWidth: 1000,
        }}
      >
        <Box
          padding="16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="40%"
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
            <FacebookIcon
              onClick={() => window.open("https://pt-br.facebook.com/fejems/")}
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/victor-genari-a7569b14b/"
                )
              }
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
            <WhatsAppIcon
              onClick={() =>
                window.open(
                  "whatsapp://send/?phone=6798133574&text=Oi! Vim falar da EJ :)."
                )
              }
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
            <InstagramIcon
              onClick={() => window.open("https://www.instagram.com/fejems/")}
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
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
          <Box
            display="flex"
            width={500}
            maxWidth="95vw"
            flexDirection="column"
            marginTop={3}
          >
            Nome
            <Box fontSize={20} component="input" height={40} />
          </Box>
          <Box
            display="flex"
            width={500}
            maxWidth="95vw"
            flexDirection="column"
            marginTop={3}
          >
            Email
            <Box fontSize={20} component="input" height={40} />
          </Box>
          <Box
            display="flex"
            width={500}
            maxWidth="95vw"
            flexDirection="column"
            marginTop={3}
          >
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
