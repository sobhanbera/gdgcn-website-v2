import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Grid } from '@mui/material'
import EventAnimation from "../../assets/EventsLottie.json";
import Lottie from "lottie-react";

type Props = {}

const PastEvents = (props: Props) => {
    return (
        <div>
            <Box
                component="img"
                sx={{
                    height: '90vh',
                    width: "100%",
                    "@media (max-width:780px)": {
                        height: '100%',
                        width: "100%",
                    }
                }}
                alt="The house from the offer."
                src="https://i.imgur.com/IoXjpbL.jpg"
            />
            <Grid container>
                <Grid sx={{ margin: '3%' }} xs={12} md={6}>
                    <Typography sx={{
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        "@media (max-width:780px)": {
                            fontSize: '48px'
                        }
                    }}>
                        Events
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Fira Sans',
                        fontSize: '20px',
                        fontWeight: 500,
                        color: '#73777B',
                        position: 'relative',
                        marginTop: '-17px',
                        "@media (max-width:780px)": {
                            fontSize: '20px'
                        }
                    }} >
                        What's happening......
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Fira Sans',
                        fontSize: '16px',
                        fontWeight: 400,
                        marginTop: '16px'
                    }}>
                        Google Developer Group Cloud is committed to fostering a community of technology
                        enthusiasts who share a passion for innovation and collaboration.
                        We organize a range of events throughout the year that provide
                        opportunities for members to learn, network, and share their ideas.
                        Some of these events are - Tech Talks, Hackathons, Workshops, and Social Events
                    </Typography>
                </Grid>
                <Grid xs={12} md={4}>
                    <Lottie animationData={EventAnimation} style={{height:'70%', marginTop:'4%'}} />
                </Grid>
            </Grid>
        </div>
    )
}

export default PastEvents