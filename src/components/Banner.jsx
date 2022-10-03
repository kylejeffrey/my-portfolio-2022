import { Box, Button, Typography } from "@mui/material";
import avatar from "../images/my-photo-cropped-01.png";

export const Banner = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "black",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        height: "720px",
        justifyContent: "center",
        // m: { xs: "16px" },
        mb: "160px",
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
            mb: "24px",
          }}
        >
          <Typography variant="h5">Hi, I'm</Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "56px" },
              color: "white",
              fontFamily: "Montserrat",
              mb: "4px",
            }}
          >
            Kyle Jeffrey,
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgb(150, 150, 150)",
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            A full-stack web developer with a passion for bringing creative
            ideas to life.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
            m: { xs: "0 auto", md: "0" },
          }}
        >
          <Button variant="contained" size="large">
            Contact Me
          </Button>
          <Button variant="outlined" size="large" sx={{ padding: "0 2.5em" }}>
            GitHub
          </Button>
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
          // order={{ xs: "-1" }}
          sx={{
            height: { xs: "240px", md: "320px" },
            width: { xs: "240px", md: "320px" },
            objectFit: "cover",
            border: "4px solid white",
            borderRadius: "50%",
            // order: { xs: "-1", md: "2" },
          }}
        ></Box>
      </Box>
    </Box>
  );
};
