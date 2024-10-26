
import { Container, IconButton, Stack, Typography } from '@mui/material';
import { Col } from 'react-bootstrap';
import Up from '../Up';


function Footer() {
    return (
        <footer id="contact" style={{ backgroundColor: 'rgb(239 65 64)' }}>
            <Container>
                <Stack sx={{ justifyContent: { sm: 'space-between', xs: 'space-evenly' }, alignItems: 'center', flexDirection: { xs: 'column', sm: 'row', md: 'row' } }}>
                    <Col style={{
                        display: 'flex', flexDirection: 'column',
                    }} >
                        <p style={{ display: 'block', width: 'fit-content', paddingTop: '0', fontSize: '16px', color: 'white', margin: '0' }}>
                            Swiss Contracting & Trading W.L.L
                        </p>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
                        <a style={{ width: 'fit-content' }} href="mailto:swissria@swissria.com" >

                            <IconButton className="footerbtn" aria-label="mail" >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    color="rgb(255, 255, 255)"
                                >
                                    <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
                                </svg>
                            </IconButton>
                        </a>
                        <a style={{ width: 'fit-content' }} href="tel:+201116622449">
                            <IconButton className="footerbtn" aria-label="Call">
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    color="rgb(255, 255, 255)"
                                >
                                    <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
                                </svg>
                            </IconButton>
                        </a >
                        <a style={{ width: 'fit-content' }} href="https://www.linkedin.com/company/swissco/">
                            <IconButton className="footerbtn" aria-label="Linked In" >
                                <svg
                                    viewBox="0 0 900 1000"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    color="rgb(255, 255, 255)"
                                >
                                    <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
                                </svg>
                            </IconButton>
                        </a >
                    </Col>
                </Stack>
            </Container>

            <Stack sx={{ backgroundColor: 'black' }}>
                <Container>
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack>
                            <Typography variant="caption" sx={{ padding: '3px', color: 'white' }}>
                                &copy; Copyright 2024 -       <h6 style={{ display: "inline-block", margin: '0' }}>
                                    <span className="anim">S</span>
                                    wiss
                                </h6>
                            </Typography>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', gap: 3, justifyContent: { xs: 'center', sm: 'end' } }}>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Up />
        </footer>

    )
}

export default Footer