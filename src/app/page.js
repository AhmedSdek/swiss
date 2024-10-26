'use client'
import { Container, Stack } from "@mui/material";
import Services from "./Component/Services/Services";
import MajorProjects from "./Component/Projects/MajorProjects";
import OutSideEgypt from "./Component/Projects/OutSideEgypt";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
export default function Home() {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <div>
      <div className="home">
        <Container>
          <Stack sx={{ position: 'relative', zIndex: '2', justifyContent: 'center', height: 'calc(100vh - 68px )', alignItems: 'center' }}>
            {/* <h1 style={{ color: 'rgb(239 65 64)', fontWeight: 'bold', letterSpacing: '4px', fontSize: '80px' }}>
              SW<strong style={{ color: 'rgb(15 43 86)', fontSize: '100px' }}>I</strong>SS
            </h1> */}
            <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
              {/* <img style={{ width: '100%', height: '100%' }} src={im.src} alt="" /> */}
              <h1 className="Dela_Gothic_One" >
                Swiss
              </h1>
            </Stack>

            <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }} className="section-subtitle ">
              Contracting & Trading <br /> Co.(W.L.L)
            </p>
            <p style={{ color: 'white' }}>
              <strong style={{ fontSize: '30px' }}>السويسريه</strong> للمقاولات والتجاره د.م.م
            </p>
            <TypeAnimation
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
            />
          </Stack>
        </Container>
        <div className="overlay"></div>
      </div>
      <Services />
      <MajorProjects />
      <OutSideEgypt />
    </div>
  );
}
