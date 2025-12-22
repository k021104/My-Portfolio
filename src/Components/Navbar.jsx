import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(item.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#e5e7eb",
        }}
      >
        Krishna Chavda
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component="a"
              href={`#${item.toLowerCase()}`}
              data-aos="fade-right"
              data-aos-delay={item * 100}
              sx={{
                textAlign: "center",
                color:
                  activeSection === item.toLowerCase() ? "#22c55e" : "#e5e7eb",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #020617, #0f172a)",
          px: { xs: 2, md: 6 },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#e5e7eb",
            }}
          >
            Krishna Chavda
          </Typography>

          {/* Desktop Navbar */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <Button
                  key={item}
                  component="a"
                  href={`#${sectionId}`}
                  data-aos="fade-down"
                  data-aos-delay={item * 100}
                  sx={{
                    color: isActive ? "#22c55e" : "#e5e7eb",
                    fontWeight: isActive ? 600 : 500,
                    borderBottom: isActive
                      ? "2px solid #22c55e"
                      : "2px solid transparent",
                    borderRadius: 0,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: "#22c55e",
                      borderBottom: "2px solid #22c55e",
                    },
                  }}
                >
                  {item}
                </Button>
              );
            })}

            {/* Social Icons */}
            <Tooltip title="GitHub">
              <IconButton
                sx={{ color: "#e5e7eb" }}
                href="https://github.com/k021104"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                sx={{ color: "#e5e7eb" }}
                href="https://www.linkedin.com/in/krishna-chavda-589b13313/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              background: "#0f172a",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* To push content below AppBar */}
      <Toolbar />
    </Box>
  );
}
