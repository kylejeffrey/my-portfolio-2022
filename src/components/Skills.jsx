import { Box, Container, Grid, Typography } from "@mui/material";
import CSS from "../images/css-3.png";
import HTML from "../images/html-5.png";
import JavaScript from "../images/js.png";
import Rails from "../images/rails.png";
import React from "../images/react.png";
import Ruby from "../images/ruby.png";

export const Skills = () => {
  return (
    <Box id="skills" sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Montserrat" }}
      >
        My Skills
      </Typography>
      <Container maxWidth="sm" className="skills-body-wrapper">
        <Grid container my={4} rowSpacing={2} columnSpacing={12}>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <p>HTML</p>
              <Box
                component="img"
                src={HTML}
                alt="HTML"
                sx={{ height: "40px", width: "40px" }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <p>CSS</p>
              <Box
                component="img"
                src={CSS}
                alt="CSS"
                sx={{ height: "40px", width: "40px" }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <p>JavaScript</p>
              <Box
                component="img"
                src={JavaScript}
                alt="JavaScript"
                sx={{ height: "40px", width: "40px" }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <p>React</p>
              <Box
                component="img"
                src={React}
                alt="React"
                sx={{ height: "40px", width: "40px" }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <p>Ruby</p>
              <Box
                component="img"
                src={Ruby}
                alt="Ruby"
                sx={{ height: "40px", width: "40px" }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <p>Rails</p>
              <Box
                component="img"
                src={Rails}
                alt="Rails"
                sx={{
                  height: "40px",
                  width: "40px",
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
