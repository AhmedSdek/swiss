import { Container, Stack } from '@mui/material'
import React from 'react'

function OurStatistics() {
    return (
        <div>
            <Container>
                <div id='OurStatistics' style={{ paddingTop: '68px' }}>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginBottom: '20px', maxWidth: { xs: '99%', sm: '85%', md: '60%' }, margin: 'auto', textAlign: 'center' }}>
                        <h2 className="section-header">
                            Our Statistics
                        </h2>
                        <p style={{ color: "#7d7d7d" }}>
                            We track key metrics that reflect our commitment to excellence and client satisfaction. Here are some important statistics that highlight our performance
                        </p>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default OurStatistics