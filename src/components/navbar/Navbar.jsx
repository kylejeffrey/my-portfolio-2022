import React, { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Hidden,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";

const navigationLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" elevation={10}>
      <Toolbar
        sx={{
          p: 0,
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Box>
          <HashLink
            to="#banner"
            scroll={(el) => scrollWithOffset(el)}
            style={{ textDecoration: "none" }}
          >
            <Avatar
              sizes="sm"
              sx={{
                boxShadow: "0 0 10px black",
                fontFamily: "Montserrat",
                background: "black",
                borderRadius: "5px",
                color: "white",
                border: "2px solid rgb(200, 200, 200)",
                ml: 1,
                "&:hover": {
                  backgroundColor: "#CBF83E",
                  boxShadow: "0px 0px 15px #CBF83E",
                  color: "black",
                  border: "none",
                },
              }}
            >
              KJ
            </Avatar>
          </HashLink>
        </Box>
        <Hidden mdDown>
          <Box
            sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          >
            {navigationLinks.map((item) => (
              <Box
                key={item.href}
                sx={{
                  width: "100px",
                  textAlign: "center",
                  // "&:hover": {
                  //   borderBottom: "1px solid #CBF83E",
                  // },

                  // Alison's animation:
                  position: "relative",

                  "&:before": {
                    content: "''",
                    position: "absolute",
                    width: "0",
                    height: "1px",
                    bottom: "-1px",
                    left: "50%",
                    backgroundColor: "#CBF83E",
                    transition: "all 0.5s ease",
                    transform: "translate(-50%,0%)",
                    transformOrigin: "center",
                    visibility: "hidden",
                  },
                  "&:hover:before": {
                    visibility: "visible",
                    width: "100%",
                  },
                }}
              >
                <HashLink
                  to={item.href}
                  scroll={(el) => scrollWithOffset(el)}
                  // smooth
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "NeueHaasDisplayThin",
                  }}
                >
                  {item.name}
                </HashLink>
              </Box>
            ))}
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize="large" sx={{ color: "white", p: "0" }} />
          </IconButton>
        </Hidden>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            boxShadow: 10,
          },
        }}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.href}>
              <HashLink
                to={item.href}
                scroll={(el) => scrollWithOffset(el)}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "NeueHaasDisplayThin",
                }}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </HashLink>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};
