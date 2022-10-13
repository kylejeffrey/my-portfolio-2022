import { Avatar, Box, Container, Grid, Link, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const Footer = () => {
  return (
    <Box sx={{ borderTop: "1px solid white" }}>
      <Container
        sx={{ mx: 0, mr: 0 }}
        maxWidth="100%"
        // sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              // p: 5,
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
                  fontFamily: "NeueHaasDisplayThin",
                  background: "black",
                  borderRadius: "5px",
                  // width: "32px",
                  // mr: "auto",
                  color: "white",
                  border: "2px solid rgb(200, 200, 200)",
                  mr: { xs: 1, md: 3 },
                }}
              >
                KJ
              </Avatar>
            </HashLink>
            <Typography
              varient="h6"
              color="white"
              sx={{ fontSize: { xs: "12px", md: "16px" } }}
            >
              Designed and built by Kyle Jeffrey
            </Typography>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/kyle-jeffrey/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: { xs: 1, md: 4 }, color: "white" }}
            >
              LINKEDIN
            </Link>
            <Link
              href="https://github.com/kylejeffrey"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              GITHUB
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
