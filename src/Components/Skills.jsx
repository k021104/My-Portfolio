import React from "react";
import { Box, Typography, Paper, LinearProgress } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";

export default function Skills() {
    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "React.js", level: 80 },
            ],
            icon: <CodeIcon />,
            color: "#2563eb",
        },
        {
            category: "UI / Styling",
            items: [
                { name: "Bootstrap", level: 85 },
                { name: "Material UI", level: 80 },
                { name: "Responsive Design", level: 95 },
            ],
            icon: <BrushIcon />,
            color: "#9333ea",
        },
        {
            category: "Tools",
            items: [
                { name: "Git", level: 90 },
                { name: "GitHub", level: 85 },
                { name: "Vercel", level: 80 },
            ],
            icon: <BuildIcon />,
            color: "#22c55e",
        },
    ];

    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 4 },
                background: "linear-gradient(135deg, #0f172a, #020617)",
            }}
        >
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                    variant="h3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    sx={{ color: "#e5e7eb", fontWeight: 700, mb: 2, }}
                >
                    Skills
                </Typography>
                <Typography sx={{ color: "#cbd5f5", fontSize: "1.1rem" }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    Technologies and tools I use while building modern frontend
                    applications.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                    maxWidth: '100%',
                    mx: "auto",
                }}
            >
                {skills.map((skill, index) => (
                    <Paper
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        sx={{
                            flex: "1 1 280px",
                            p: 4,
                            borderRadius: 3,
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(12px)",
                            borderTop: `4px solid ${skill.color}`,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 2,
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "pointer",
                            "&:hover": {
                                transform: "translateY(-10px)",
                                boxShadow: `0 20px 30px ${skill.color}44`,
                            },
                        }}
                    >
                        <Box sx={{ color: skill.color, fontSize: 30 }}>{skill.icon}</Box>
                        <Typography
                            sx={{ fontWeight: 600, color: "#e5e7eb", fontSize: "1.2rem" }}
                        >
                            {skill.category}
                        </Typography>

                        <Box sx={{ width: "100%", mt: 1 }}>
                            {skill.items.map((item, i) => (
                                <Box key={i} sx={{ mb: 2 }}>
                                    <Typography
                                        sx={{ color: "#9ca3af", fontSize: "0.95rem", mb: 0.5 }}
                                    >
                                        {item.name}
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.level}
                                        data-aos="fade-right"
                                        sx={{
                                            height: 8,
                                            borderRadius: 5,
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: skill.color,
                                            },
                                            backgroundColor: "#2e3340",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
