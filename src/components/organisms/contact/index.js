import React, { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useToasts } from "react-toast-notifications";
import axios from "axios";

function Contact({ addRefs }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { addToast } = useToasts();

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.message.trim() || !form.email.trim()) {
      addToast("Faltam informações no seu formulario!", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://mail-fejems.vercel.app/",
        form
      );
      if (response.data.success) {
        addToast("Email enviado com sucesso!", {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast("Não foi possivel enviar o seu email! :c", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch {
      addToast("Não foi possivel enviar o seu email! :c", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

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
            <Box
              fontSize={20}
              component="input"
              height={40}
              value={form.name}
              onChange={({ target: { value } }) =>
                setForm({ ...form, name: value })
              }
            />
          </Box>
          <Box
            display="flex"
            width={500}
            maxWidth="95vw"
            flexDirection="column"
            marginTop={3}
          >
            Email
            <Box
              fontSize={20}
              component="input"
              height={40}
              value={form.email}
              onChange={({ target: { value } }) =>
                setForm({ ...form, email: value })
              }
            />
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
              value={form.message}
              onChange={({ target: { value } }) =>
                setForm({ ...form, message: value })
              }
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
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
