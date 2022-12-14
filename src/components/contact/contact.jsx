import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const Contact = () => {
  const formRef = useRef();
  // const [contact, setContact] = React.useState({
  //   name: "",
  // });
  const sendEmail = (e) => {
    e.preventDefault();

    // console.log(window.__CONFIG__);
    // console.log(formRef);

    emailjs
      .sendForm(
        window.__CONFIG__.REACT_APP_EMAILJS_SERVICE_ID,
        window.__CONFIG__.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        window.__CONFIG__.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email message sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // React.useEffect(() => {
  //   console.log({ contact }, contact?.name, contact?.email?.secondary);
  // }, [contact]);

  // function onSend() {
  //   apiRequest(contact).then(() => {
  //     alert("success");
  //   });
  // }

  return (
    <Container id="contact" sx={{ mb: "240px" }}>
      {/* <form>
        <input
          value={contact.name}
          onChange={(e) =>
            setContact((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </form> */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Betatron",
            mb: 5,
            fontSize: "80px",
          }}
        >
          Contact Me
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ mb: 5, fontFamily: "NeueHaasDisplayThin", fontSize: "18px" }}
          align="center"
          variant="body1"
        >
          Feel free to reach out if you want to get in touch! I'm always open to
          freelance opportunities.
        </Typography>
      </Box>
      <Container>
        <Paper sx={{ p: 2, maxWidth: "800px", m: "0 auto" }}>
          <form ref={formRef} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* <label>Name</label>
              <input type="text" name="user_name" /> */}
                <TextField
                  label="Name"
                  placeholder="John Doe"
                  fullWidth
                  required
                  name="user_name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {/* <label>Email</label>
              <input type="email" name="user_email" /> */}
                <TextField
                  label="Email"
                  placeholder="youremail@gmail.com"
                  fullWidth
                  required
                  name="user_email"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <label>Message</label>
              <textarea name="message" /> */}
                <TextField
                  label="Subject"
                  placeholder="Subject"
                  fullWidth
                  variant="outlined"
                  name="subject"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <label>Message</label>
              <textarea name="message" /> */}
                <TextField
                  label="Message"
                  placeholder="Type your message here"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  name="message"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <input type="submit" value="Send" /> */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  value="Send"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#CBF83E",
                      boxShadow: "0px 0px 15px #CBF83E",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Container>
  );
};
