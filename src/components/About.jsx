import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box
      id="about"
      sx={{
        m: { xs: "0 auto 160px" },
        maxWidth: { xs: "640px", md: "800px" },
        mb: "160px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Montserrat" }}
      >
        About Me
      </Typography>
      <Box
        sx={{
          // minWidth: "480px",
          maxWidth: "800px",
          m: "32px auto",
        }}
      >
        <Typography variant="body1" sx={{ m: "16px 32px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          quisquam magni culpa doloribus minus enim illo minima quo veritatis
          delectus. Quas molestias libero nostrum, et distinctio tempora dolor
          cumque expedita.
        </Typography>
        <Typography variant="body1" sx={{ m: "16px 32px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          quisquam magni culpa doloribus minus enim illo minima quo veritatis
          delectus. Quas molestias libero nostrum, et distinctio tempora dolor
          cumque expedita.
        </Typography>
        <Typography variant="body1" sx={{ m: "16px 32px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          quisquam magni culpa doloribus minus enim illo minima quo veritatis
          delectus. Quas molestias libero nostrum, et distinctio tempora dolor
          cumque expedita.
        </Typography>
      </Box>
    </Box>
  );
};
