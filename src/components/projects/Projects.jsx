import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import iivent from "../../images/ii-vent.png";
import { LangAvatar } from "./lang_avatar";

export const Projects = () => {
  return (
    <Container sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Montserrat", mb: "24px" }}
      >
        Projects
      </Typography>
      <Box>
        <Grid container>
          <Grid item xs={12} sx={{ p: 0 }}>
            <Paper sx={{ p: 3 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={12} md={5.5}>
                  <Link href="#">
                    <div>
                      <span>
                        <img
                          src={iivent}
                          alt="ii-vent"
                          style={{
                            maxWidth: "100%",
                          }}
                        />
                      </span>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Box
                    sx={{
                      height: "100%",
                      px: { xs: 0, md: 5 },
                      pt: 2,
                      pb: { xs: 0, md: 2 },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: "Montserrat", mb: { xs: 1, md: 3 } }}
                    >
                      ii-vent
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgb(150, 150, 150)", mb: { xs: 0, md: 2 } }}
                    >
                      A desktop web-application that streamlines the management
                      of music events.
                    </Typography>
                    <Box sx={{ display: "flex", mb: { xs: 0, md: 2 } }}>
                      <LangAvatar imageKey="ruby" sx={{ ml: 0 }} />
                      <LangAvatar imageKey="rails" />
                      <LangAvatar imageKey="javascript" />
                      <LangAvatar imageKey="bootstrap" sx={{ mr: 0 }} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                          py: 1,
                          px: 6,
                        }}
                      >
                        View Project
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
