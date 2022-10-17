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
  // Link,
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
                ml: 1,
                // transition: "border 0s, backgroundColor 1.2s, color 0.2s",
                // transition: "all 0.5s",
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
                  // px: 2,
                  "&:hover": {
                    borderBottom: "1px solid #CBF83E",
                    // backgroundColor: "#CBF83E",
                    // boxShadow: "0 4px 8px -4px #CBF83E",
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
                  // variant="button"
                  // href={item.href}
                  // underline="none"
                  // sx={{ color: "white" }}
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
                // variant="button"
                // href={item.href}
                // underline="none"
                // sx={{ color: "white" }}
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
