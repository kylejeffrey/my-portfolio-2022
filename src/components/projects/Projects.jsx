import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import BooksBnB from "../../images/BooksBnB.png";
import iivent from "../../images/ii-vent.png";
import Watchlist from "../../images/Watchlist.png";
import { LangAvatar } from "./lang_avatar";

export const Projects = () => {
  return (
    <Container sx={{ mb: "240px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Montserrat", mb: 5 }}
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
                      <LangAvatar imageKey="stimulus" />
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
          <Grid item xs={12} sx={{ p: 0, mt: 5 }}>
            <Paper sx={{ p: 3 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={12} md={5.5}>
                  <Link href="#">
                    <div>
                      <span>
                        <img
                          src={BooksBnB}
                          alt="BooksBnB"
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
                      Books BnB
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgb(150, 150, 150)", mb: { xs: 0, md: 2 } }}
                    >
                      A rails marketplace app that allows users to search,
                      upload or borrow books from other users.
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
          <Grid item xs={12} sx={{ p: 0, my: 5 }}>
            <Paper sx={{ p: 3 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={12} md={5.5}>
                  <Link href="#">
                    <div>
                      <span>
                        <img
                          src={Watchlist}
                          alt="Watchlist"
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
                      Watchlist
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgb(150, 150, 150)", mb: { xs: 0, md: 2 } }}
                    >
                      A web app for organising movies into themed watchlists.
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
