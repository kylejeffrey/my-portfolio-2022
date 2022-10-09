import { Box, Button, Link, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import avatar from "../images/my-photo-cropped-01.png";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const Banner = () => {
  return (
    <Box
      id="banner"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        height: "720px",
        justifyContent: "center",
        pb: "160px",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          maxWidth: "560px",
          mr: { xs: "0px", md: "40px" },
        }}
      >
        <Box
          sx={{
            m: { xs: "0 auto", md: 0 },
            mb: 3,
            width: { xs: "320px", md: "480px" },
          }}
        >
          <Typography variant="h5" sx={{ mb: "8px" }}>
            Hi, I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "56px" },
              color: "white",
              fontFamily: "Montserrat",
              mb: "16px",
            }}
          >
            Kyle Jeffrey,
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgb(150, 150, 150)",
              fontSize: { xs: "16px", md: "20px" },
              mb: "8px",
            }}
          >
            A full-stack web developer with a passion for bringing creative
            ideas to life.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            m: { xs: "0 auto", md: "16px 0" },
          }}
        >
          <HashLink
            to="#contact"
            scroll={(el) => scrollWithOffset(el)}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" size="large">
              Contact Me
            </Button>
          </HashLink>
          {/* <Link
            href="https://github.com/kylejeffrey"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" size="large" sx={{ py: 1, px: 4.5 }}>
              GitHub
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kyle-jeffrey/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" size="large" sx={{ py: 1, px: 3 }}>
              LinkedIn
            </Button>
          </Link> */}
        </Box>
      </Box>
      <Box
        sx={{
          m: "16px",
        }}
      >
        <Box
          component="img"
          src={avatar}
          alt="Kyle"
          sx={{
            height: { xs: "240px", md: "320px" },
            width: { xs: "240px", md: "320px" },
            objectFit: "cover",
            border: "4px solid white",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
