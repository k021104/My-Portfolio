import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from "@mui/material/Zoom";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                color="primary"
                onClick={scrollToTop}
                sx={{
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    zIndex: 9999,
                    background: "#2563eb",
                    "&:hover": { background: "#1d4ed8" },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
}

