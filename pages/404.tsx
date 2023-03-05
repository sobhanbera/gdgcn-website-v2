import {Button, Grid, Typography} from '@mui/material'
import {textAlign} from '@mui/system'
import Lottie from 'lottie-react'
import Animation from '../assets/404 Nagpur.json'

export default function Error404Page() {
    return (
        <div>
            <Grid container>
                <Grid sx={{margin: '3%'}} xs={12} md={5}>
                    <Typography
                        color="initial"
                        sx={{
                            marginTop: '10px',
                            textAlign: 'center',
                            fontSize: '42px',
                        }}>
                        Lost Your Way?
                    </Typography>
                    <Typography
                        variant="h6"
                        color="initial"
                        sx={{marginTop: '10px', textAlign: 'center'}}>
                        Sorry We can't find that page, There is a lot to explore
                        on the home page.
                    </Typography>
                    <Button
                        href="/home"
                        sx={{
                            marginLeft: '25%',
                            marginTop: '10px',
                            backgroundColor: '#139D57',
                            color: '#fff',
                            textTransform: 'none',
                            fontSize: '16px',
                            '&:hover': {
                                backgroundColor: '#EF3F3F',
                            },
                            '@media (max-width:780px)': {
                                width: '50%',
                                textAlign: 'center',
                                marginBottom: '10%',
                            },
                        }}>
                        GDG Cloud Nagpur Home Page
                    </Button>
                </Grid>
                <Grid sx={{margin: '1%'}} xs={12} md={5}>
                    <Lottie animationData={Animation} />
                </Grid>
            </Grid>
        </div>
    )
}
