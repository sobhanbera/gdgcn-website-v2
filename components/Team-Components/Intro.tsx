import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography'
import Lottie from "lottie-react";
import TeamAnimation from "../../assets/Teams GDGCN.json";

const Intro = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, marginTop:'5%' }}>
                <Grid container>
                    <Grid sx={{ marginLeft: '3%' }} xs={12} md={7}>
                        <Typography sx={{ fontSize: '30px', fontWeight: 600 }}>
                            Meet Our Team
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#73777B', position: 'relative', marginTop: '-10px' }} >
                            The Ones, who are making it happen......
                        </Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, marginTop: '10px' }}>
                            GDG Cloud Nagpur aspires to expand its community of passionate
                            and fervent developers to encapsulate the latest and advanced
                            technologies such as Cloud Computing, Artificial Intelligence, Machine Learning, Big Data,
                            Web, and App development, etc. through their interactive and
                            free workshops. The students get an exceptional experience through
                            the seminars conducted involving the industry professionals.
                            With the cooperation of various domains such as Technical, Business,
                            Creatives and Public Relations and Documentation these events are
                            organized with rewarding feedbacks.
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Lottie animationData={TeamAnimation}  />
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Intro