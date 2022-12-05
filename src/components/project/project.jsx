import React from "react";

import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

import { LangAvatar } from "../projects/lang_avatar";
import { VideoButton } from "./video_button";

export function Project({
  name,
  image,
  link,
  repo,
  video,
  description,
  languages,
}) {
  React.useEffect(() => {
    Aos.init();
  }, []);

  // let hasVideo = { video };

  return (
    <Grid
      item
      xs={12}
      sx={{ p: 0, maxWidth: { xs: "640px", lg: "100%" } }}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <Paper sx={{ p: 3, mb: 5, borderRadius: "15px" }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {/* BREAK PROJECT INTO SMALLER COMPONENTS: */}
          {/* <LeftImageBlock name={name} image={image} /> */}
          <Grid
            item
            xs={12}
            lg={5.5}
            sx={{
              pb: { xs: 3, lg: 0 },
              transition: "all 0.25s",

              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src={
                    window.__CONFIG__.NODE_ENV == "production"
                      ? `https://cdn.kylejeffrey.me${image}`
                      : image
                  }
                  alt={name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
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
                  flexWrap: "wrap",
                  mt: 3,
                  mb: 3,
                }}
              >
                {languages.map((language) => (
                  <LangAvatar imageKey={language} key={language} />
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center" },
                }}
              >
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
                      width: { xs: "240px", md: "180px" },
                      py: 1,
                      mb: { xs: 2, md: 0 },
                      "&:hover": {
                        backgroundColor: "#CBF83E",
                        boxShadow: "0px 0px 15px #CBF83E",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </Link>
                <Link
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      width: { xs: "240px", md: "180px" },
                      py: 1,
                      "&:hover": {
                        backgroundColor: "#AB47BC",
                        boxShadow: "0px 0px 15px #AB47BC",
                      },
                    }}
                  >
                    View Code
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  // flexDirection: { xs: "row", md: "row" },
                  alignItems: { xs: "center" },
                }}
              >
                {/* CONDITIONALLY RENDER 3RD BUTTON IF THERE IS A VIDEO FOR THAT PROJECT */}
                {video ? <VideoButton {...video} /> : null}
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
  repo: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.any.isRequired,
};
