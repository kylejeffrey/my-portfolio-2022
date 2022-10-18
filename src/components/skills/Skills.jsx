import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import {
  BootstrapPlainIcon,
  Css3PlainIcon,
  FigmaPlainIcon,
  // GithubOriginalIcon,
  GitPlainIcon,
  HerokuPlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  PostgresqlPlainIcon,
  RailsPlainIcon,
  ReactOriginalIcon,
  RubyPlainIcon,
  SassOriginalIcon,
} from "react-devicons";

export const Skills = () => {
  return (
    <Box id="skills" sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Betatron", fontSize: "80px" }}
      >
        MY SKILLS
      </Typography>
      <Container maxWidth="sm" className="skills-body-wrapper">
        <Grid container my={4} rowSpacing={2} columnSpacing={12}>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <Html5PlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <Css3PlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <JavascriptPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <ReactOriginalIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <RubyPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <RailsPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <PostgresqlPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <BootstrapPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <GitPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          {/* <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <GithubOriginalIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid> */}
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <HerokuPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <SassOriginalIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box p={2} textAlign="center">
              <FigmaPlainIcon color="#CBF83E" size="40px" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
