'use client'
import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Data } from '../Data/Data'
import Grid from '@mui/material/Grid2';
import { Zoom } from 'react-awesome-reveal';

function MajorProjects() {
    console.log(Data.MajorProjects)
    return (
        <div >
            <Container>
                <div id='majorprojects' style={{ paddingTop: '68px' }}>
                    <div>
                        <h2 className="section-header">
                            Major Projects
                        </h2>
                        <p className="section-subtitle">
                            STRATEGIC PROJECTS
                        </p>
                    </div>
                    <Stack sx={{ gap: 2, padding: '15px 0' }}>
                        {Data.MajorProjects.map((project) => {
                            return (
                                <Zoom key={project.id}>
                                    <Grid container spacing={2} sx={{ flexDirection: 'row' }}>
                                        <Grid sx={{ maxWidth: { md: '250px' }, maxHeight: { md: '200px' } }} size={{ xs: 12, sm: 5, md: 4, lg: 2 }} >
                                            <img style={{ width: '100%', height: '100%' }} src={project.img.src} alt={project.title} />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 7, md: 8, lg: 10 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', border: `3px solid ${project.color}`, padding: '10px', flex: 'auto !important' }}>
                                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(15 43 86)', fontSize: '20px', letterSpacing: '4px' }} component='p'>
                                                {project.title}
                                            </Typography>
                                            <Typography component='span'>
                                                {project.subtitle}
                                            </Typography>
                                            <ul>
                                                {project.ul.map((li, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <strong>
                                                                {li.strong} : &nbsp;
                                                            </strong>
                                                            {li.span}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Zoom>
                            )
                        })}
                    </Stack>
                    {/* <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button sx={{ width: '80px', fontWeight: 'bold', lineHeight: 'normal', padding: '10px' }} variant='outlined'>
                            More
                        </Button>
                    </Stack> */}
                </div>
            </Container>
        </div>
    )
}

export default MajorProjects