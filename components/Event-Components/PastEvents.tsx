import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


type Props = {}

let pastEvent = [
    {
        title: 'Cloud Community Days 2022',
        image: 'https://i.imgur.com/IoXjpbL.jpg',
        date: 'Sun, Sep 25, 2022, 10:00 AM (IST)',
        location: 'Persistent Systems Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-cloud-community-day-nagpur-2022/',
        text: 'GDG Cloud Nagpur is introducing its first annual flagship event, "🍹Cloud Community Day Nagpur", to bring together passionate tech enthusiasts, Cloud developers, and community enthusiasts to learn about Google Cloud Technology and Certifications.',
    },
    {
        title: 'Flutter Forward Meetup Nagpur',
        image: 'https://i.imgur.com/BRCQNlQ.png',
        date: 'Sat, Feb 4, 12:00 PM (IST)',
        location: 'Persistent Systems Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-flutter-forward-extended-meetup-nagpur/',
        text: 'Flutter Forward Extended is an extended event of Flutter Forward, taking place on Jan 25, 2023 in Kenya. It will feature new updates, insightful sessions by GDEs and Flutter Developers, networking sessions, and swag.',
    },
    {
        title: 'Dev Day Nagpur',
        image: 'https://i.imgur.com/n6tbNHM.png',
        date: 'Sat, Jan 21, 9:00 AM (IST)',
        location: 'St.Vincent Palotti College of Engineering',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-devday-nagpur/',
        text: 'To kickstart journey of college students into MLOps and give them a wide overview of the Cloud+ML domain.',
    },
    {
        title: 'ML on Cloud',
        image: 'https://i.imgur.com/v1pjmPk.png',
        date: '2023-01-01',
        location: 'Govt. College of Engineering, Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-ml-on-cloud-series-transfer-learning/',
        text: 'Join us for the first episode of ML on Cloud Series: Transfer Learning and explore the latest tech with us, including Google Cloud, AI on GCP, Transfer Learning, Low code tools, and community bonding.',
    },
    {
        title: 'Destination Nagpur Meet',
        image: 'https://i.imgur.com/Rf1qvPO.png',
        date: 'Sun, Dec 11, 2022, 9:00 AM (IST)',
        location: 'St.Vincent Palotti College of Engineering',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-destination-nagpur-meet-2022/',
        text: 'Interactive Q & A with IT Company Dignitaries on topics like Google Cloud, Big Data, Artificial Intelligence, and Machine Intelligence.',
    },
]

const PastEvents = (props: Props) => {
    return (
        <div>
            <Grid container>
                <Grid
                    sx={{
                        marginLeft: '3%',
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
                        Past Events
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Fira Sans',
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#73777B',
                            position: 'relative',
                            marginTop: '-17px',
                            '@media (max-width:780px)': {
                                fontSize: '20px',
                            },
                        }}>
                        Take a Glimpse of our past events
                    </Typography>

                </Grid>
            </Grid>
            <Box>
                <Grid container>
                    {pastEvent.map(
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
                                <Card sx={{ maxHeight: 520 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="150"
                                        image={data.image}
                                    />
                                    <CardContent sx={{ paddingBottom: '0px' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div">
                                            {data.title}
                                        </Typography>
                                        <Stack spacing={2} sx={{ marginBottom: '10px' }}>
                                            <Button sx={{
                                                textTransform: 'none',
                                                fontSize: '13px',
                                                color: '#DB4437',
                                                borderColor: '#DB4437',
                                                '&:hover': {
                                                    borderColor: '#fff',
                                                    backgroundColor: '#DB4437',
                                                    color: '#fff'
                                                },
                                                cursor: 'auto'
                                            }} variant="outlined" >
                                                {data.location}
                                            </Button>
                                            <Button sx={{
                                                fontSize: '13px',
                                                borderColor: '#0F9D58',
                                                color: '#0F9D58',
                                                '&:hover': {
                                                    backgroundColor: '#0F9D58',
                                                    color: '#ffff',
                                                },
                                                cursor: 'auto'
                                            }} variant="outlined">
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
                                        <Button href={data.link} size="small" variant="contained" sx={{
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

export default PastEvents
