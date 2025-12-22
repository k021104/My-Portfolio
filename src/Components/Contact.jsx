import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        alert("Message was sent");
        e.preventDefault();
        console.log(formData);
        setFormData({ name: "", email: "", message: "" });
        // You can integrate email API or backend later
    };

    return (
        <Box
            id="contact"
            sx={{
                position: "relative",
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 6 },
                background: "linear-gradient(135deg, #0a0f1e, #020617)",
                color: "#e5e7eb",
                overflow: "hidden",
            }}
        >
            {/* Glow Boxes */}
            {/* Glow Boxes */}
            <Box
                sx={{
                    position: "absolute",
                    top: "15%",
                    left: "10%",
                    width: 250,
                    height: 250,
                    background: "linear-gradient(135deg, #00ffcc, #0066ff)",
                    filter: "blur(150px)",
                    opacity: 0.5,
                    zIndex: 0,
                    borderRadius: "50%",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "15%",
                    right: "5%",
                    width: 300,
                    height: 300,
                    background: "linear-gradient(135deg, #ffeb7f, #c9a0ff)",
                    filter: "blur(150px)",
                    opacity: 0.35,
                    zIndex: 0,
                    borderRadius: "50%",
                }}
            />

            {/* Section Header */}
            <Box sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 1 }} data-aos="fade-up">
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Contact
                </Typography>
                <Typography sx={{ color: "#cbd5f5", fontSize: "1.1rem" }}>
                    Feel free to reach out for collaborations or just say hi!
                </Typography>
            </Box>

            {/* Form */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: 600,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {["name", "email", "message"].map((field, index) => (
                    <TextField
                        key={field}
                        variant="filled"
                        label={field === "name" ? "Name" : field === "email" ? "Email" : "Message"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        fullWidth
                        multiline={field === "message"}
                        rows={field === "message" ? 5 : 1}
                        InputProps={{
                            sx: {
                                color: "#e5e7eb",
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: 2,
                                "&:hover": { background: "rgba(255,255,255,0.15)" },
                                "&.Mui-focused": { background: "rgba(255,255,255,0.2)" },
                            },
                        }}
                        InputLabelProps={{ sx: { color: "#cbd5f5" } }}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    />
                ))}

                <Button
                    type="submit"
                    sx={{
                        background: "rgba(34,197,94,0.15)",
                        color: "#22c55e",
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: "1rem",
                        textTransform: "none",
                        border: "1px solid #22c55e",
                        borderRadius: 2,
                        backdropFilter: "blur(6px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            background: "rgba(34,197,94,0.10)",
                            boxShadow: "0 0 12px rgba(34,197,94,0.8)",
                            transform: "scale(1.05)",
                        },
                    }}
                    data-aos="fade-up"
                    data-aos-delay={450}
                >
                    Send Message
                </Button>
            </Box>
        </Box>
    );
}
