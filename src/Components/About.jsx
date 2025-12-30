import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import PaletteIcon from "@mui/icons-material/Palette";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function About() {
  const cards = [
    {
      title: "Frontend Development",
      desc: "React, HTML, CSS, JavaScript",
      icon: <CodeIcon />,
      color: "#2563eb",
    },
    {
      title: "Currently Learning",
      desc: "JavaScript, React concepts",
      icon: <SchoolIcon />,
      color: "#22c55e",
    },
    {
      title: "UI Design",
      desc: "Responsive layouts, clean UI",
      icon: <PaletteIcon />,
      color: "#9333ea",
    },
    {
      title: "Growth Mindset",
      desc: "Consistency, problem solving",
      icon: <TrendingUpIcon />,
      color: "#f97316",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #020617, #0f172a)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 260,
          height: 260,
          background: "#2563eb",
          filter: "blur(140px)",
          opacity: 0.4,
          top: "30%",
          left: "5%",
        }}
      />

      {/* Left Content */}
      <Box
        sx={{
          maxWidth: '100%',
          mx: "auto",
          mb: { xs: 6, md: 0 },
          textAlign: "justify",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#e5e7eb", mb: 2 }} data-aos="fade-down"
          data-aos-duration="1000">
          About{" "}
          <Box component="span" sx={{ color: "#22c55e" }}>
            Me
          </Box>
        </Typography>

        <Typography sx={{ color: "#cbd5f5", fontSize: "1.05rem", lineHeight: 1.8, mb: 3 }} data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000">
          I am a passionate Full Stack Development student with a strong interest in building
          modern, scalable, and user-friendly web applications. I enjoy transforming ideas into
          real-world digital experiences.
        </Typography>

        <Typography sx={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.7 }} data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000">
          Currently focused on React, JavaScript, and backend fundamentals, I continuously learn
          new technologies and improve my problem-solving skills through projects and practice.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 3, // space between cards
          maxWidth: 800,
          mx: "auto",
        }}
      >
        {cards.map((item, index) => (
          <Paper
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            sx={{
              flex: "1 1 calc(50% - 12px)", // 2 cards per row, responsive
              minWidth: 250, // ensures cards don't shrink too much
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              borderLeft: `4px solid ${item.color}`,
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateX(8px) !important",
                boxShadow: "0 20px 30px rgba(0,0,0,0.6)",
              },
            }}
          >
            <Box sx={{ color: item.color, fontSize: 28, mt: "2px" }}>{item.icon}</Box>
            <Box>
              <Typography sx={{ fontWeight: 600, color: "#e5e7eb", mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "#9ca3af", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {item.desc}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
