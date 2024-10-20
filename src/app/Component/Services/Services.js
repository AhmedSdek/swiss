'use client'
import React from 'react'
import { Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
function Services() {
    return (
        <div id="services">
            <Container>
                <div style={{ paddingTop: '68px' }}>
                    <Stack sx={{ textAlign: { xs: 'center', md: 'initial' } }}>
                        <h2 className="section-header">
                            SERVICES
                        </h2>
                        <p className="section-subtitle">
                            OUR VALUABLE SERVICES
                        </p>
                    </Stack>
                    <Grid container sx={{ marginTop: '15px' }} >
                        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
                            <div className="cercel">
                                <Stack sx={{ borderRadius: '50%', position: 'relative', height: '120px', width: '120px', justifyContent: 'center', alignItems: 'center', border: '1.5px solid rgb(15 43 86)', lineHeight: 'normal', margin: { xs: 'auto', md: 'initial' }, backgroundColor: 'white' }}>
                                    <p className="service-num">
                                        01
                                    </p>
                                    <span className="service-num-span">
                                        Service
                                    </span>
                                </Stack>
                            </div>
                            <Stack sx={{ padding: '10px ' }}>
                                <Typography sx={{ textAlign: { xs: 'center', md: 'initial' } }} component="p" className="service-p">
                                    Distribution Boards
                                    (Up to 6000 A)
                                </Typography >
                                <span className="service-span">
                                    supply, installation, commissioning, start‐
                                    up, operation and maintenance of
                                    Distribution panels as a schneider Prixsa
                                    certified panel builder up to 4,000 Amps.
                                </span>
                            </Stack>
                        </Grid>


                        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
                            <div className=" cercel">
                                <Stack sx={{ borderRadius: '50%', position: 'relative', height: '120px', width: '120px', justifyContent: 'center', alignItems: 'center', border: '1.5px solid rgb(15 43 86)', lineHeight: 'normal', margin: { xs: 'auto', md: 'initial' }, backgroundColor: 'white' }}>
                                    <p className="service-num">
                                        02
                                    </p>
                                    <span className="service-num-span">
                                        Service
                                    </span>
                                </Stack>
                            </div>
                            <Stack sx={{ padding: '10px ' }}>
                                <Typography sx={{ textAlign: { xs: 'center', md: 'initial' } }} component="p" className="service-p">
                                    MCC & VSD
                                </Typography >
                                <span className="service-span">
                                    Supply, installation, commissioning, start‐
                                    up, operation and maintenance of MCC
                                    and VSD as a schneider certified partner
                                    with the required excessive trainings and
                                    practical studies. Supply, installation,
                                    commissioning, start‐up of the new Tesys
                                    island technology whereas the talent
                                    meets the expertise.
                                </span>
                            </Stack>
                        </Grid>


                        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
                            <div className="cercel">
                                <Stack sx={{ borderRadius: '50%', position: 'relative', height: '120px', width: '120px', justifyContent: 'center', alignItems: 'center', border: '1.5px solid rgb(15 43 86)', lineHeight: 'normal', margin: { xs: 'auto', md: 'initial' }, backgroundColor: 'white' }}>
                                    <p className="service-num">
                                        03
                                    </p>
                                    <span className="service-num-span">
                                        Service
                                    </span>
                                </Stack>
                            </div>
                            <Stack sx={{ padding: '10px ' }}>
                                <Typography sx={{ textAlign: { xs: 'center', md: 'initial' } }} component="p" className="service-p">
                                    BMS & EMS
                                </Typography >
                                <span className="service-span">
                                    Supply, installation, commissioning, start‐
                                    up, operation and maintenance of
                                    complete Building Management Systems
                                    (BMS) and Energy Management Systems
                                    (EMS) utilizing the latest state of art
                                    controllers, sensors, valves, actuators as
                                    a system integrator in partnership with
                                    Schneider Electric.
                                </span>
                            </Stack>
                        </Grid>


                        <Grid size={{ lg: 6, md: 6, xs: 12 }}>
                            <div className="cercel">
                                <Stack sx={{ borderRadius: '50%', position: 'relative', height: '120px', width: '120px', justifyContent: 'center', alignItems: 'center', border: '1.5px solid rgb(15 43 86)', lineHeight: 'normal', margin: { xs: 'auto', md: 'initial' }, backgroundColor: 'white' }}>
                                    <p className="service-num">
                                        04
                                    </p>
                                    <span className="service-num-span">
                                        Service
                                    </span>
                                </Stack>
                            </div>
                            <Stack sx={{ padding: '10px ' }}>
                                <Typography sx={{ textAlign: { xs: 'center', md: 'initial' } }} component="p" className="service-p">
                                    Energy Metering
                                </Typography >
                                <span className="service-span">
                                    Supply installation, commissioning and
                                    start-up of domestic water meters ,
                                    BTU meters (Pre-paid and usual) with
                                    Central Metering Platform
                                </span>
                            </Stack>
                        </Grid>


                        <Grid size={{ xs: 12 }}>
                            <div className="cercel">
                                <Stack sx={{ borderRadius: '50%', position: 'relative', height: '120px', width: '120px', justifyContent: 'center', alignItems: 'center', border: '1.5px solid rgb(15 43 86)', lineHeight: 'normal', margin: { xs: 'auto', md: 'initial' }, backgroundColor: 'white' }}>
                                    <p className="service-num">
                                        05
                                    </p>
                                    <span className="service-num-span">
                                        Service
                                    </span>
                                </Stack>
                            </div>
                            <Stack sx={{ padding: '10px' }}>
                                <Typography sx={{ textAlign: { xs: 'center', md: 'initial' } }} component="p" className="service-p">
                                    OEM Solutions
                                </Typography >
                                <span className="service-span">
                                    Supply, installation, commissioning, start up,
                                    operation and maintenance of OEM Controllers as
                                    Siemens Partner
                                    Such as Control for DX-unit, Chillers & AHUs
                                </span>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Services