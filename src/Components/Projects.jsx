import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import portfolioImg from '../assets/img/Personal-Portfolio.png';
import travelImg from '../assets/img/Travel-agency.png';
import restaurantImg from '../assets/img/Restaurant.png';
import elearningImg from '../assets/img/E-learning.png';
import homestudioImg from '../assets/img/Home-Studio.png';
import medilabImg from '../assets/img/Medilab-Hospital.png';

export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio Website",
            desc: "A modern personal portfolio website built with React and Material UI, showcasing my projects, skills, and UI-focused design approach.",
            img: portfolioImg,
            code: "https://github.com/k021104/My-Portfolio",
            live: "https://my-portfolio-sand-tau-20.vercel.app/",
        },
        {
            title: "Travel Agency Website",
            desc: "A responsive travel agency website built with Bootstrap, featuring destination highlights, package previews, and a user-friendly booking section.",
            img: travelImg,
            code: "https://github.com/k021104/bootstrap-travelagency-site",
            live: "https://k021104.github.io/bootstrap-travelagency-site/",
        },
        {
            title: "Restaurant Website",
            desc: "A restaurant website built with Bootstrap showcasing food categories, menu previews, and an illustrative reservation section.",
            img: restaurantImg,
            code: "https://github.com/k021104/bootstrap-restaurant-site",
            live: "https://k021104.github.io/bootstrap-restaurant-site/",
        },
        {
            title: "E-Learning Website",
            desc: "Designed a modern e-learning UI with React Router, implementing multi-page navigation and a user-friendly course layout.",
            img: elearningImg,
            code: "https://github.com/k021104/react_router_app",
            live: "https://reactrouterapp.vercel.app/",
        },
        {
            title: "Home Decoration Studio",
            desc: "Created a visually appealing home decoration studio website landing page using React Bootstrap, focusing on responsive design and clean UI components.",
            img: homestudioImg,
            code: "https://github.com/k021104/React-Bootatrap-APP",
            live: "https://reactbootstrapapp.vercel.app/",
        },
        {
            title: "Medical Hospital Website",
            desc: "Designed a healthcare website interface using Material UI with a clean, professional look suitable for hospital and medical services.",
            img: medilabImg,
            code: "https://github.com/k021104/MUI-APP",
            live: "https://reactmuiapp-six.vercel.app/",
        },
    ];

    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 6 },
                background: "linear-gradient(135deg, #020617, #0f172a)",
                color: "#e5e7eb",
            }}
        >
            {/* Section Header */}
            <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Projects
                </Typography>
                <Typography sx={{ color: "#cbd5f5", fontSize: "1.1rem" }}>
                    Some of the projects I have built recently
                </Typography>
            </Box>

            {/* Cards Container */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 4,
                    maxWidth: "1200px",
                    mx: "auto",
                }}
            >
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        sx={{
                            width: { xs: "100%", md: "48%" },
                            height: 280,
                            borderRadius: 3,
                            position: "relative",
                            overflow: "hidden",
                            backgroundImage: `url(${project.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            border: "2px solid #ffffff",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
                            cursor: "pointer",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08),0 25px 45px rgba(0,0,0,0.65)`,
                                border: "2px solid #ffffff",
                            },
                            "&:hover .overlay": {
                                opacity: 1,
                                transform: "scale(1.2)",
                            },

                        }}
                    >
                        {/* Bottom Text */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                p: 2,
                                textAlign: 'left',
                                background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4))",
                                textShadow: "0 2px 6px rgba(0,0,0,1)",
                                overflow: "hidden",
                                boxSizing: "border-box",
                            }}
                        >
                            <Typography sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "1.2rem" }, }}>
                                {project.title}
                            </Typography>
                            <Typography sx={{ fontSize: "0.95rem", color: "#cbd5f5" }}>
                                {project.desc}
                            </Typography>
                        </Box>

                        {/* Hover Overlay */}
                        <Box
                            className="overlay"
                            sx={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: 3,
                                background: "rgba(2,6,23,0.85)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                opacity: 0,
                                transform: "scale(0.95)",
                                transition: "opacity 0.3s ease, transform 0.3s ease",
                            }}
                        >

                            <Button
                                href={project.code}
                                target="_blank"
                                startIcon={<GitHubIcon />}
                                sx={{
                                    color: "#22c55e",
                                    border: "1px solid #22c55e",
                                    px: 3,
                                    py: 1,
                                    fontWeight: 500,
                                    textTransform: "none",
                                    transition: "all 0.25s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(34,197,94,0.15)",
                                        boxShadow: "0 0 12px rgba(34,197,94,0.6)",
                                        borderColor: "#22c55e",
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                Code
                            </Button>

                            <Button
                                href={project.live}
                                target="_blank"
                                startIcon={<LaunchIcon />}
                                sx={{
                                    backgroundColor: "#2563eb",
                                    color: "#fff",
                                    px: 3,
                                    py: 1,
                                    fontWeight: 500,
                                    textTransform: "none",
                                    transition: "all 0.25s ease",
                                    "&:hover": {
                                        backgroundColor: "#1d4ed8",
                                        boxShadow: "0 0 14px rgba(37,99,235,0.8)",
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                Live
                            </Button>

                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
