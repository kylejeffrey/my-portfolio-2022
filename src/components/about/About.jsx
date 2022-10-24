import React from "react";

import { Box, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  // React.useEffect(() => {});

  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box
      id="about"
      sx={{
        m: { xs: "0 auto 240px" },
        maxWidth: { xs: "640px", md: "800px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Betatron", fontSize: "80px" }}
      >
        ABOUT ME
      </Typography>
      <Box
        sx={{
          maxWidth: "800px",
          m: "32px auto",
        }}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Typography
          variant="body1"
          sx={{
            m: "16px 32px",
            fontFamily: "NeueHaasDisplayThin",
            fontSize: "18px",
          }}
        >
          My name is Kyle Jeffrey. I was born and raised in Phoenix, Arizona and
          have lived in Osaka, Japan since 2013.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: "16px 32px",
            fontFamily: "NeueHaasDisplayThin",
            fontSize: "18px",
          }}
        >
          As a full-stack web developer, I have a deep interest in taking
          innovative ideas and making them a reality through code. Since
          becoming a developer, I've built side projects to help me learn new
          technologies and explore creative ideas.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: "16px 32px",
            fontFamily: "NeueHaasDisplayThin",
            fontSize: "18px",
          }}
        >
          In my spare time, I like to work on music production, making sci-fi
          inspired drum and bass. Some of my inspiration stems from movies such
          as Blade Runner, District 9, and Ex Machina. I'm also influenced by
          artists and musicians such as Noisia, Billain, and Spor.
        </Typography>
      </Box>
    </Box>
  );
};
