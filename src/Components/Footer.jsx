import React from "react";

import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return(
        <div>
            <IconButton href="https://www.instagram.com/lapizco_debon/">
                <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/daniel.lapizcoperez">
                <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/daniel-lapizco-pérez-69bb6420b/">
                <LinkedInIcon />
            </IconButton>
            


            <p> <CopyrightIcon /> Todos los derechos reservados para Daniel Lapizco</p>
        </div>
    );
}

export default Footer;