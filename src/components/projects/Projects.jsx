import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import theme from "../../App";
import CSS from "../../images/css-3.png";
import HTML from "../../images/html-5.png";
import iivent from "../../images/ii-vent.png";
import JavaScript from "../../images/js.png";
import Rails from "../../images/rails.png";
import React from "../../images/react.png";
import Ruby from "../../images/ruby.png";
import { LangAvatar } from "./lang_avatar";

export const Projects = () => {
  return (
    <Container sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Montserrat", mb: "24px" }}
      >
        Projects
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              sx={{ pt: "80px", justifyContent: "space-between" }}
            >
              <Grid item xs={12} md={5.5}>
                <Link href="#">
                  <div>
                    <span>
                      <img
                        src={iivent}
                        alt="ii-vent"
                        style={{
                          maxWidth: "100%",
                        }}
                      />
                    </span>
                  </div>
                </Link>
              </Grid>
              <Grid item xs={12} md={5.5}>
                <Box>
                  <Typography variant="h4" sx={{ fontFamily: "Montserrat" }}>
                    ii-vent
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgb(150, 150, 150)" }}
                  >
                    A desktop web-application that streamlines the management of
                    music events.
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <LangAvatar sx={{ ml: 0 }} />
                    <LangAvatar foo="bar" imageKey="javascript" />
                    <LangAvatar imageKey="rails" sx={{ mr: 0 }} />
                    {/* <Avatar
                      sx={{ p: 1, height: "50px", width: "50px" }}
                      size="large"
                      src={Ruby}
                    />
                    <Avatar
                      sx={{ p: 1, height: "50px", width: "50px" }}
                      size="large"
                      src={Rails}
                    />
                    <Avatar
                      sx={{ p: 1, height: "50px", width: "50px" }}
                      size="large"
                      src={JavaScript}
                    /> */}
                    {/* <IconButton>
                      <Box
                        component="img"
                        src={Ruby}
                        sx={{ height: "30px", ...theme.projectLanguage }}
                      ></Box>
                    </IconButton>
                    <IconButton>
                      <Box
                        component="img"
                        src={Rails}
                        sx={{ height: "30px", ...theme.projectLanguage }}
                      ></Box>
                    </IconButton>
                    <IconButton>
                      <Box
                        component="img"
                        src={JavaScript}
                        sx={{ height: "30px", ...theme.projectLanguage }}
                      ></Box>
                    </IconButton> */}
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        py: 1,
                        px: 6,
                        // m: "0 auto",
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
