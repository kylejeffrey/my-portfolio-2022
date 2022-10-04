import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

const navigationLinks = [
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" elevation={10}>
      <Toolbar
        sx={{
          p: 0,
          justifyContent: "space-between",
          backgroundColor: "#282c34",
        }}
      >
        <Box>
          <Link
            variant="button"
            href={"#"}
            underline="none"
            sx={{
              color: "white",
            }}
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
                ml: "8px",
              }}
            >
              KJ
            </Avatar>
          </Link>
        </Box>
        <Hidden mdDown>
          <Box
            sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          >
            {navigationLinks.map((item) => (
              <Box key={item.href} sx={{ px: 2 }}>
                <Link
                  variant="button"
                  href={item.href}
                  underline="none"
                  sx={{ color: "white" }}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton>
            <MenuIcon
              fontSize="large"
              sx={{ color: "white", p: "0" }}
              onClick={() => setOpen(true)}
            />
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
            backgroundColor: "#282c34",
            boxShadow: 10,
          },
        }}
      >
        <div>
          <IconButton>
            <ChevronRightIcon
              onClick={() => setOpen(false)}
              sx={{ color: "white" }}
            />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.href}>
              <Link
                variant="button"
                href={item.href}
                underline="none"
                sx={{ color: "white" }}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};
