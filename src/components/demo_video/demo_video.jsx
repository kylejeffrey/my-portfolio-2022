import React from "react";

import { Box, Typography } from "@mui/material";
import Aos from "aos";
import { Container } from "react-bootstrap";

import "aos/dist/aos.css";

export const DemoVideo = () => {
  return (
    <Box
      id="demo-video"
      sx={{
        m: { xs: "0 auto 240px" },
        maxWidth: { xs: "640px", md: "800px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: "32px",
          color: "white",
          fontFamily: "Betatron",
          textAlign: "center",
          fontSize: "64px",
        }}
      >
        ii-vent Project Pitch
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // flexDirection: { xs: "column", md: "row" },
        }}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              m: "24px 32px",
              fontFamily: "NeueHaasDisplayThin",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Check out my project pitch of iiVent! <br />A web application to
            help music event planners stay organized.
          </Typography>
        </Box>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/yh8iZUNj8B8?start=2210"
            title="iiVent Project Pitch Video"
            allowFullScreen
            style={{ maxWidth: "100%", height: "100%" }}
          ></iframe>
        </div>
      </Box>
    </Box>
  );
};
