import { Box, Button, Typography } from "@mui/material";
import avatar from "../images/my-photo-cropped-01.png";

export const Banner = () => {
  return (
    <Box
      sx={{
        height: "600px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: "160px",
      }}
    >
      <Box
        sx={{
          maxWidth: "560px",
          mr: "40px",
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
              fontSize: "40px",
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
      <Box>
        <img
          src={avatar}
          alt="Kyle"
          style={{
            height: "320px",
            width: "320px",
            objectFit: "cover",
            border: "4px solid white",
            borderRadius: "50%",
          }}
        ></img>
      </Box>
    </Box>
  );
};
