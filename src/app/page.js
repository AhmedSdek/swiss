'use client'
import { Button, Container, Stack, Typography } from "@mui/material";
import Services from "./Component/Services/Services";
import MajorProjects from "./Component/Projects/MajorProjects";
import OutSideEgypt from "./Component/Projects/OutSideEgypt";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import AboutUsHome from "./Component/Abouthome/AboutUsHome";
import { ArrowForward, ArrowForwardIosOutlined } from "@mui/icons-material";

export default function Home() {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <div>
      <div className="home">
        <Stack sx={{ position: 'relative', zIndex: '2', justifyContent: 'center', height: 'calc(100vh - 68px )' }}>
          <Container sx={{ backgroundColor: '#00000038', margin: '0', width: { md: '50% !important', sm: '70% !important' }, height: '100%', paddingLeft: { md: '90px !important', sm: '40px !important' } }}>
            <Stack sx={{ justifyContent: 'center', alignItems: 'flex-start', height: '100%', gap: 2 }}>
              <Typography component='h1' sx={{ color: '#B31319', fontWeight: 'bold', fontSize: { md: '50px', sm: '35px', xs: '30px' } }}>
                <strong style={{ color: 'white' }}>
                  +
                </strong>
                <br />
                The Power of Integration Since 1997
              </Typography>
              <hr style={{ width: '100%', color: 'white', opacity: '1', borderTop: '2px solid' }} />
              <p style={{ fontWeight: '600' }}>
                Your trusted partner in delivering unparalleled solutions. For over 25 years, we have built a reputation for excellence, innovation, and reliability in the contracting and trading industries.
              </p>
              <Button variant="contained" sx={{ backgroundColor: '#B31319', fontWeight: 'bold', padding: '15px', borderRadius: '10px', letterSpacing: '3px' }}>
                Our Services
                <ArrowForwardIosOutlined />
              </Button>
            </Stack>

            {/* <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }} className="section-subtitle ">
              Contracting & Trading <br /> Co.(W.L.L)
            </p> */}
            {/* <p style={{ color: 'white' }}>
              <strong style={{ fontSize: '30px' }}>السويسريه</strong> للمقاولات والتجاره د.م.م
            </p> */}
            {/* <TypeAnimation
              sequence={[
                1000,
                () => {
                  setTypingStatus('Typing...');
                },
                'We build your future .',
                () => {
                  setTypingStatus('Done Typing');
                },
                1000,
                () => {
                  setTypingStatus('Deleting...');
                },
                '',
                () => {
                  setTypingStatus('Done Deleting');
                },
              ]}
              speed={20}
              style={{ color: 'white', textAlign: 'center', marginTop: '10px' }} className="section-subtitle"
              repeat={Infinity}
            /> */}
        </Container>
        </Stack>
        <div className="overlay"></div>
      </div>
      <AboutUsHome />
      <Services />
      <MajorProjects />
      <OutSideEgypt />
    </div>
  );
}
