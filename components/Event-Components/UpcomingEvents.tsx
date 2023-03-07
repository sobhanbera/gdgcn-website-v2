import {Box, Grid, Stack, Typography} from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

type Props = {}

let upcomingEvents = [
    {
        title: 'Nagpur FOSS',
        image: 'https://i.imgur.com/LujIVBn.png',
        date: 'Sun, Mar 12, 9:15 AM (IST)',
        location: 'GH Raisoni College of Engineering',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-nagpurfoss/',
        text: 'NagpurFOSS is a celebration of open-source technology and the vibrant communities that drive its growth. It brings together some of the brightest minds in the industry to share their knowledge, insights, and experiences. Attendees will find valuable insights and practical tips, as well as delicious F&B and a panel discussion.',
    },
]

const UpcomingEvents = (props: Props) => {
    return (
        <div>
            <Grid container>
                <Grid
                    sx={{
                        marginLeft: '3%',
                        '@media (max-width:780px)': {
                            marginLeft: '5%',
                        },
                    }}
                    xs={12}
                    md={7}>
                    <Typography
                        sx={{
                            fontSize: '52px',
                            fontWeight: 600,
                            fontFamily: 'Fira Sans',
                            '@media (max-width:780px)': {
                                fontSize: '48px',
                            },
                        }}>
                        Upcoming Events
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Fira Sans',
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#73777B',
                            position: 'relative',
                            marginTop: '-12px',
                            '@media (max-width:780px)': {
                                fontSize: '20px',
                            },
                        }}>
                        Mark your Calenders.....
                    </Typography>
                </Grid>
            </Grid>
            <Box>
                <Grid container>
                    {upcomingEvents.map(
                        (data: {
                            title: string
                            image: string
                            date: string
                            location: string
                            link: string
                            text: string
                        }) => (
                            <Grid
                                sx={{
                                    margin: '3%',
                                    '@media (max-width:780px)': {
                                        marginLeft: '5%',
                                    },
                                }}
                                xs={12}
                                md={3}>
                                <Card sx={{maxHeight: 520}}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={data.image}
                                    />
                                    <CardContent sx={{paddingBottom: '0px'}}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div">
                                            {data.title}
                                        </Typography>
                                        <Stack
                                            spacing={2}
                                            sx={{marginBottom: '10px'}}>
                                            <Button
                                                sx={{
                                                    textTransform: 'none',
                                                    fontSize: '13px',
                                                    color: '#DB4437',
                                                    borderColor: '#DB4437',
                                                    '&:hover': {
                                                        borderColor: '#fff',
                                                        backgroundColor:
                                                            '#DB4437',
                                                        color: '#fff',
                                                    },
                                                    cursor: 'auto',
                                                }}
                                                variant="outlined">
                                                {data.location}
                                            </Button>
                                            <Button
                                                sx={{
                                                    fontSize: '13px',
                                                    borderColor: '#0F9D58',
                                                    color: '#0F9D58',
                                                    '&:hover': {
                                                        backgroundColor:
                                                            '#0F9D58',
                                                        color: '#ffff',
                                                    },
                                                    cursor: 'auto',
                                                }}
                                                variant="outlined">
                                                {data.date}
                                            </Button>
                                        </Stack>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary">
                                            {data.text}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            href={data.link}
                                            size="small"
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#0F9D58',
                                                color: '#ffff',
                                                '&:hover': {
                                                    backgroundColor: '#F4B400',
                                                    color: '#ffff',
                                                },
                                            }}>
                                            Register Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ),
                    )}
                </Grid>
            </Box>
        </div>
    )
}

export default UpcomingEvents
