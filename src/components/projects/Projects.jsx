import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Project } from "../../components/project";
import { fetchProjects } from "./data";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then((res) => {
      setProjects(res.body);
    });
  }, []);

  return (
    <Container id="projects" sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "Betatron",
          mb: 5,
          fontSize: "80px",
        }}
      >
        Projects
      </Typography>
      <Box>
        <Grid container justifyContent={"center"}>
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
