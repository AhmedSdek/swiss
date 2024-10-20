import { Container, Stack } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
import img from './400kv-Steel-Power-Transmission-Tower.jpg'
export const metadata = {
    title: "about",
    description: "CO.FOR CONTRACTING & TRADING",
};
function About() {
    return (
        <div className='about'>
            <Grid container sx={{ height: '100%' }}>
                <Grid size={{ lg: 4, md: 4, sm: 5, xs: 0 }}>
                    <img style={{ width: "100%", height: '100%' }} src={img.src} alt='' />
                </Grid>
                <Grid size={{ lg: 8, md: 8, sm: 7, xs: 12 }}>
                    <Stack sx={{ backgroundColor: 'white' }}>
                        <h2 className='section-header' style={{ padding: '20px 30px' }} >
                            ABOUT <strong>US</strong>
                        </h2>
                    </Stack>
                    <Stack sx={{ padding: '20px 30px' }}>
                        <h4 className='about-h4'>
                            Our Vision
                        </h4>
                        <p>
                            Our vision is to create a better future by providing
                            innovative solutions and exemplary service to our
                            customers, making a positive impact on their lives
                            and the world
                        </p>
                        <h4 className='about-h4'>
                            Our Mission
                        </h4>
                        <p>
                            Our mission is to continuously strive for excellence
                            in everything we do, delivering superior products
                            and services that exceed customer expectations.
                            We are committed to fostering a culture of
                            collaboration, innovation, and integrity, while also
                            promoting sustainable practices that contribute
                            to the well-being of our planet
                        </p>
                        <h4 className='about-h4'>
                            Value proposition
                        </h4>
                        <p>
                            "The Power of Integration" is more than just a
                            tagline; it is a philosophy that permeates every
                            aspect of our organization. It reflects our
                            commitment to collaboration, both within our
                            internal teams and with our valued partners. We
                            understand that when we unite our strengths and
                            expertise, we can achieve far more than what is
                            individually possible.
                        </p>
                        <br />
                        <p>
                            Through the power of integration, we aim to
                            provide our customers with comprehensive
                            solutions that meet their diverse needs. By
                            combining various products, services, and
                            technologies, we create synergies that result in
                            enhanced efficiency, improved performance, and
                            ultimately, exceptional value for our customers.
                        </p>
                    </Stack>
                </Grid>
            </Grid>

        </div>
    )
}

export default About