import { Box, Container, Grid, Typography } from "@mui/material";
import {
  Css3PlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  RailsPlainIcon,
  ReactOriginalIcon,
  RubyPlainIcon,
} from "react-devicons";

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
              <Html5PlainIcon color="white" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <Css3PlainIcon color="white" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <JavascriptPlainIcon color="white" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <ReactOriginalIcon color="white" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <RubyPlainIcon color="white" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box p={2} textAlign="center">
              <RailsPlainIcon color="white" size="40px" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
