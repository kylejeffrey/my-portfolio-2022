import { Box, Typography, Container } from "@mui/material";

export const Projects = () => {
  return (
    <Box sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Montserrat" }}
      >
        Projects
      </Typography>
      <Container maxWidth></Container>
    </Box>
  );
};
