import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { LangAvatar } from "../projects/lang_avatar";

export function Project({ name, image, link, description, languages }) {
  return (
    <Grid item xs={12} sx={{ p: 0 }}>
      <Paper sx={{ p: 3, mb: 5 }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {/* <LeftImageBlock name={name} image={image} /> */}
          <Grid item xs={12} md={5.5}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <div>
                <span>
                  <img
                    src={image}
                    alt={name}
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </span>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Paper
              variant="outlined"
              sx={{
                height: "100%",
                px: { xs: 2, md: 5 },
                pt: 2,
                pb: { xs: 2, md: 2 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: "Montserrat", mb: { xs: 1, md: 3 } }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgb(150, 150, 150)",
                  mb: { xs: 0, md: 2 },
                }}
              >
                {description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: { xs: 0, md: 2 },
                }}
              >
                {languages.map((language) => (
                  <LangAvatar imageKey={language} />
                ))}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      py: 1,
                      px: 6,
                    }}
                  >
                    View Project
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.any.isRequired,
};
