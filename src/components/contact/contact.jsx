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
import React, { useRef } from "react";

export const Contact = () => {
  const formRef = useRef();
  // const [contact, setContact] = React.useState({
  //   name: "",
  // });
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(window.__CONFIG__);
    console.log(formRef);

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
    <Container sx={{ mb: 5 }}>
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
          sx={{ textAlign: "center", fontFamily: "Montserrat", mb: 5 }}
        >
          Contact Me
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ mb: 5 }} align="center" variant="body1">
          I'm open to freelance opportunities! Do you have a request, question
          or suggestion? Feel free to contact me!
        </Typography>
      </Box>
      <Container>
        <Paper sx={{ p: 2 }}>
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
