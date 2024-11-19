'use client'
import { Container, Stack } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
// import vid from 'blob:https://www.youtube.com/6586663f-bcb9-49f8-bf92-0cc1bfde941b'
function Intro() {
    return (
        <div>
            <Container>
                <div id='OurStatistics' style={{ paddingTop: '68px' }}>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginBottom: '20px', maxWidth: { xs: '99%', sm: '85%', md: '60%' }, margin: 'auto', textAlign: 'center' }}>
                        <h2 className="section-header">
                            Introduction to our latest innovation in this island
                        </h2>
                        <p style={{ color: "#7d7d7d" }}>
                            Our leadership team, composed of industry veterans, guides our strategic vision and aligns operations with our commitment to quality and sustainability. They foster innovation and empower employees to reach their full potential while upholding the values of Swiss Co.
                        </p>
                    </Stack>
                    <Stack>
                        <Stack sx={{ height: '500px', padding: '20px 0' }}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gj6wLOSXVLk" title="TeSys Island - 1. Understand the Concept | Schneider Electric" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Stack>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default Intro