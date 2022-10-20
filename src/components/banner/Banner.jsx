import React from "react";

import { Box, Button, keyframes, Link, Typography } from "@mui/material";
import { GithubOriginalIcon, LinkedinPlainIcon } from "react-devicons";
import { HashLink } from "react-router-hash-link";

import avatar from "../../images/my-photo-cropped-05-transparent.png";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const slideInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`0% {
  -webkit-transform: translateX(1000px);
          transform: translateX(1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}`;

export const Banner = () => {
  const [slide, setSlide] = React.useState(false);

  React.useEffect(() => {}, []);
  setTimeout(() => {
    // Animation
    setSlide(true);
  }, 500);
  return (
    <Box
      id="banner"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        height: "800px",
        justifyContent: "center",
        pb: "160px",
        textAlign: { xs: "center", md: "left" },
        // animation:
        //   slide &&
        //   `${slideInLeft} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
      }}
      // slide={true}
    >
      <Box
        sx={{
          maxWidth: "640px",
          mr: { xs: "0px", md: "40px" },
          animation:
            slide &&
            `${slideInLeft} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        }}
        slide={true}
      >
        <Box
          sx={{
            m: { xs: "0 auto", md: 0 },
            mb: 3,
            width: { xs: "320px", md: "640px" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: "8px",
              color: "white",
              fontFamily: "NeueHaasDisplayThin",
            }}
          >
            Hi I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "96px" },
              color: "white",
              fontFamily: "Betatron",
              mb: "16px",
              fontWeight: "400",
            }}
          >
            KYLE JEFFREY
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "16px", md: "20px" },
              fontFamily: "NeueHaasDisplayThin",
              mb: 2,
            }}
          >
            A full-stack web developer with a passion for bringing creative
            ideas to life.
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "center", md: "start" }}
        >
          <Link
            href="https://www.linkedin.com/in/kyle-jeffrey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinPlainIcon color="white" size="40px" />
          </Link>
          <Link
            href="https://github.com/kylejeffrey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOriginalIcon
              color="white"
              size="40px"
              style={{ marginLeft: "16px" }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            m: { xs: "24px auto", md: "16px 0" },
          }}
        >
          <HashLink
            to="#contact"
            scroll={(el) => scrollWithOffset(el)}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                position: "relative",
                transition: ".2s box-shadow",
                "&:hover": {
                  backgroundColor: "#CBF83E",
                  boxShadow: "0px 0px 15px #CBF83E",
                },
              }}
            >
              Contact Me
            </Button>
          </HashLink>
        </Box>
      </Box>
      <Box
        sx={{
          m: "16px",
          animation:
            slide &&
            `${slideInRight} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        }}
        slide={true}
      >
        <Box
          component="img"
          src={avatar}
          alt="Kyle"
          sx={{
            height: { xs: "240px", md: "280px" },
            width: { xs: "240px", md: "280px" },
            objectFit: "cover",
            borderRadius: "50%",
            backgroundColor: "white",
            // boxShadow: "0px 0px 30px white",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
