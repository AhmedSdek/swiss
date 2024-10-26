'use client'
import { ArrowDropUpOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

function Up() {
    window.onscroll = function () { myFunction() };
    function myFunction() {
        if (window.scrollY > 150) {
            document.getElementById("up").style.scale = '1';
        } else {
            document.getElementById("up").style.scale = '0';
        }
    }
    return (
        <IconButton id="up" onClick={() => window.scrollTo(0, 0)} className="up" style={{ position: 'fixed', bottom: '0', backgroundColor: '#404040', right: '15px', borderRadius: '10px 10px 0 0', padding: '0', zIndex: '100', opacity: '0.8', height: '35px', transition: '0.3s', scale: '0' }}>
            <ArrowDropUpOutlined style={{ color: 'white', fontSize: '40px' }} />
        </IconButton>
    )
}

export default Up