'use client'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Data } from '../Data/Data'
import Grid from '@mui/material/Grid2';
import { Zoom } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';
function MajorProjects() {
    return (
        <div >
            <Container>
                <div id='majorprojects' style={{ paddingTop: '68px' }}>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginBottom: '20px', maxWidth: { xs: '99%', sm: '85%', md: '60%' }, margin: 'auto', textAlign: 'center' }}>
                        <h2 className="section-header">
                            Major Projects
                        </h2>
                        <p style={{ color: "#7d7d7d" }}>
                            We take pride in the diverse array of projects we have successfully completed across various sectors. Each project reflects our commitment to quality, innovation, and client satisfaction. Below is a selection of notable projects that showcase our expertise and dedication to delivering excellence.
                        </p>
                    </Stack>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        navigation={true}
                        centeredSlides={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {Data.MajorProjects.map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card sx={{ maxWidth: 345, textAlign: 'start' }}>
                                        <CardMedia
                                            sx={{ height: 200 }}
                                            image={project.img.src}
                                            title={project.title}
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {project.subtitle}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" sx={{ color: '#B31319', fontWeight: 'bold' }}>Read More</Button>
                                        </CardActions>
                                    </Card>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                        <Button sx={{ width: 'fit-content', fontWeight: 'bold', backgroundColor: '#B31319' }} variant='contained'>
                            Show All Projects
                        </Button>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default MajorProjects