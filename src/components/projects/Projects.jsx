import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import CSS from "../../images/css-3.png";
import HTML from "../../images/html-5.png";
import iivent from "../../images/ii-vent.png";
import JavaScript from "../../images/js.png";
import Rails from "../../images/rails.png";
import React from "../../images/react.png";
import Ruby from "../../images/ruby.png";

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
                <div>
                  <Typography variant="h3">ii-vent</Typography>
                  <Typography variant="body1">
                    A desktop web-application that streamlines the management of
                    music events.
                  </Typography>
                  <div>
                    <IconButton>
                      <Box
                        component="img"
                        src={Ruby}
                        sx={{ height: "30px" }}
                      ></Box>
                    </IconButton>
                    <IconButton>
                      <Box
                        component="img"
                        src={Rails}
                        sx={{ height: "30px" }}
                      ></Box>
                    </IconButton>
                    <IconButton>
                      <Box
                        component="img"
                        src={JavaScript}
                        sx={{ height: "30px" }}
                      ></Box>
                    </IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
