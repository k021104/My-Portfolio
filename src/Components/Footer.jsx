import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
    return (
        <Box
            sx={{
                background: "#020617",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                py: 5,
                textAlign: "center",
            }}
            data-aos="fade-up"
            data-aos-delay="150"
        >
            {/* Name */}
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    color: "#e5e7eb",
                }}
            >
                Krishna Chavda
            </Typography>

            {/* Role */}
            <Typography
                sx={{
                    mt: 0.5,
                    color: "#9ca3af",
                    fontSize: "0.95rem",
                }}
            >
                Aspiring Full Stack Developer | UI-Focused Designer
            </Typography>

            {/* Social Icons */}
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                mt={3}
            >
                <IconButton
                    href="https://github.com/k021104"
                    target="_blank"
                    sx={{
                        color: "#9ca3af",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            color: "#22c55e",
                            boxShadow: "0 0 12px rgba(34,197,94,0.7)",
                            transform: "translateY(-3px)",
                        },
                    }}
                >
                    <GitHubIcon />
                </IconButton>

                <IconButton
                    href="https://www.linkedin.com/in/krishna-chavda-589b13313/"
                    target="_blank"
                    sx={{
                        color: "#9ca3af",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            color: "#2563eb",
                            boxShadow: "0 0 12px rgba(37,99,235,0.7)",
                            transform: "translateY(-3px)",
                        },
                    }}
                >
                    <LinkedInIcon />
                </IconButton>

                <IconButton
                    href="mailto:krishnachavda1104@gmail.com"
                    target="_blank"
                    sx={{
                        color: "#9ca3af",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            color: "#22c55e",
                            boxShadow: "0 0 12px rgba(34,197,94,0.7)",
                            transform: "translateY(-3px)",
                        },
                    }}
                >
                    <EmailIcon />
                </IconButton>
            </Stack>

            {/* Copyright */}
            <Typography
                sx={{
                    mt: 3,
                    fontSize: "0.85rem",
                    color: "#6b7280",
                }}
            >
                © {new Date().getFullYear()} Krishna Chavda. All rights reserved.
            </Typography>
        </Box>
    );
}
