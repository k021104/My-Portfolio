import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function Home() {
    return (
        <section id="home">
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #020617, #0f172a)",
                    position: "relative",
                    overflow: "hidden",
                    px: 2,
                }}
            >
                {/* Gradient Blobs */}
                <Box
                    sx={{
                        position: "absolute",
                        width: { xs: 200, md: 300 },
                        height: { xs: 200, md: 300 },
                        background: "#2563eb",
                        filter: "blur(170px)",
                        opacity: 0.6,
                        top: "15%",
                        left: "10%",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        width: 300,
                        height: 300,
                        background: "#22c55e",
                        filter: "blur(170px)",
                        opacity: 0.6,
                        bottom: "15%",
                        right: "10%",
                    }}
                />

                {/* Glass Card */}
                <Box
                    sx={{
                        maxWidth: 850,
                        textAlign: "center",
                        p: { xs: 4, md: 7 },
                        borderRadius: 4,
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(18px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant="h2"
                        data-aos="fade-down" data-aos-duration="1000"
                        sx={{
                            fontWeight: 700,
                            color: "#e5e7eb",
                            fontSize: { xs: "2.4rem", md: "3.4rem" },
                        }}
                    >
                        Hi, I’m{" "}
                        <Box component="span" sx={{ color: "#22c55e" }}>
                            Krishna Chavda
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            fontSize: "1.4rem",
                            color: "#9ca3af",
                        }}
                        data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
                    >
                        Aspiring Full Stack Developer
                    </Typography>

                    <Typography
                        sx={{
                            mt: 3,
                            fontSize: "1.05rem",
                            lineHeight: 1.7,
                            color: "#cbd5f5",
                        }}
                        data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"
                    >
                        Passionate student crafting modern, responsive and scalable
                        web applications using React and JavaScript.
                    </Typography>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                        mt={5}
                        data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000"
                    >
                        <Button
                            variant="contained"
                            sx={{
                                px: 4,
                                py: 1.4,
                                borderRadius: "30px",
                                textTransform: "none",
                                fontSize: "1rem",
                                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                                boxShadow: "0 12px 30px rgba(37,99,235,0.2)",
                                "&:hover": {
                                    transform: "translateY(-3px)",
                                },
                            }}
                            component="a"
                            href="#projects"
                        >
                            View Projects
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                px: 4,
                                py: 1.4,
                                borderRadius: "30px",
                                textTransform: "none",
                                fontSize: "1rem",
                                color: "#22c55e",
                                borderColor: "#22c55e",
                                "&:hover": {
                                    background: "#22c55e",
                                    color: "#020617",
                                },
                            }}
                            component="a" href="#" target="_blank"
                        >
                            Download Resume
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </section>
    );
}
