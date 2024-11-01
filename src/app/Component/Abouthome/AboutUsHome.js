import { ArrowBackSharp, ArrowForward } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import img from '../../corporate-business-handshake-business-partners-1.webp'
function AboutUsHome() {
    return (
        <Container>
            <Stack sx={{ flexDirection: { md: 'row', xs: 'column' }, padding: { md: '30px 40px', xs: '30px 0' }, gap: { xs: 3, md: 7 }, color: 'rgb(15 43 86)', justifyContent: 'space-between' }}>
                <Stack sx={{ width: { lg: '40%', md: '50%' }, height: '520px' }}>
                    <img style={{ height: '100%', width: '100%' }} src={img.src} alt='' />
                </Stack>
                <Stack sx={{ width: { lg: '60%', md: '50%' }, padding: '10px 0' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: '#B31319' }}>
                        About Us
                        <br />
                        SINCE 1997
                    </Typography>
                    <Typography sx={{ color: 'black', fontWeight: 'bold', fontSize: '45px' }}>
                        SWISS Contracting And Trading
                    </Typography>
                    <Typography sx={{ color: '#B31319', fontWeight: '600', fontSize: '25px', display: 'flex', alignItems: 'center', gap: 1, padding: '10px 0' }}>
                        <hr style={{ width: '40px', display: 'inline-block', opacity: '1', borderTop: '2px solid' }} />  Comprehensive Energy Metering Solutions
                    </Typography>
                    <Typography sx={{ color: '#726C6C', padding: '0 0 30px' }}>
                        Swiss Integrated Solutions specializes in providing cutting-edge building management systems (BMS), energy management systems (EMS), and various industrial automation services. Our mission is to deliver superior quality products and services that exceed customer expectations, driven by our values of innovation, sustainability, and integrity.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: '#B31319', fontWeight: 'bold', padding: '15px', borderRadius: '10px', letterSpacing: '3px', width: 'fit-content' }}>
                        About Us
                        <ArrowForward />
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default AboutUsHome