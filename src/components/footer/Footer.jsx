import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const Footer = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 5,
          }}
        >
          <HashLink
            to="#banner"
            scroll={(el) => scrollWithOffset(el)}
            style={{ textDecoration: "none" }}
            // variant="button"
            // href={"#"}
            // underline="none"
            // sx={{
            //   color: "white",
            // }}
          >
            <Avatar
              sizes="sm"
              sx={{
                boxShadow: "0 0 10px black",
                fontFamily: "Montserrat",
                background: "black",
                borderRadius: "5px",
                // width: "32px",
                // mr: "auto",
                color: "white",
                border: "2px solid rgb(200, 200, 200)",
                mr: 3,
              }}
            >
              KJ
            </Avatar>
          </HashLink>
          <Typography varient="h6" color="white">
            Designed and built by Kyle Jeffrey
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
