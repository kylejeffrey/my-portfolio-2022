import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { LangAvatar } from "../projects/lang_avatar";

export function Project({ name, image, link, description, languages }) {
  return (
    <Grid item xs={12} sx={{ p: 0, maxWidth: { xs: "640px", lg: "100%" } }}>
      <Paper sx={{ p: 3, mb: 5, borderRadius: "15px" }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {/* <LeftImageBlock name={name} image={image} /> */}
          <Grid
            item
            xs={12}
            lg={5.5}
            sx={{
              pb: { xs: 3, lg: 0 },
              transition: "all 0.25s",

              "&:hover": {
                // backgroundColor: "#CBF83E",
                boxShadow: "0px 0px 20px #CBF83E",
              },
            }}
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <div>
                {/* <span> */}
                <img
                  src={image}
                  alt={name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: { xs: "400px" },
                    objectFit: "cover",
                    // height: "100%",
                    // width: "100%",
                  }}
                />
                {/* </span> */}
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} lg={5.5}>
            <Box
              sx={{
                height: "100%",
                px: { xs: 2, md: 5 },
                pt: 2,
                pb: { xs: 2, md: 2 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "NeueHaasDisplayThin",
                  mb: { xs: 1, md: 3 },
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgb(150, 150, 150)",
                  mb: { xs: 0, md: 2 },
                  fontFamily: "NeueHaasDisplayThin",
                }}
              >
                {description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: 5,
                  mb: 5,
                }}
              >
                {languages.map((language) => (
                  <LangAvatar imageKey={language} key={language} />
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
                    color="primary"
                    sx={{
                      py: 1,
                      px: 6,
                      "&:hover": {
                        backgroundColor: "#CBF83E",
                        boxShadow: "0px 0px 15px #CBF83E",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </Link>
              </Box>
            </Box>
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
