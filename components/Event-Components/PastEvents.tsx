import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

type Props = {}

let pastEvent = [
    {
        title: 'Cloud Community Days 2022',
        date: '2023-01-01',
        location: 'Persistent Systems Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-cloud-community-day-nagpur-2022/',
        text: 'Aute anim non Lorem Lorem id commodo nostrud. Ex esse est labore nostrud reprehenderit do dolore reprehenderit aliqua sint culpa commodo. Dolor voluptate cupidatat ea Lorem proident pariatur exercitation et. Exercitation ipsum anim elit exercitation do duis Lorem sit ex occaecat officia. Occaecat quis voluptate mollit est excepteur duis veniam. Esse commodo magna commodo duis commodo consequat do sint ullamco culpa voluptate ut officia. Nulla tempor non enim voluptate occaecat.'
    },
    {
        title: 'Cloud Community Days 2022',
        date: '2023-01-01',
        location: 'Persistent Systems Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-cloud-community-day-nagpur-2022/',
        text: 'Aute anim non Lorem Lorem id commodo nostrud. Ex esse est labore nostrud reprehenderit do dolore reprehenderit aliqua sint culpa commodo. Dolor voluptate cupidatat ea Lorem proident pariatur exercitation et. Exercitation ipsum anim elit exercitation do duis Lorem sit ex occaecat officia. Occaecat quis voluptate mollit est excepteur duis veniam. Esse commodo magna commodo duis commodo consequat do sint ullamco culpa voluptate ut officia. Nulla tempor non enim voluptate occaecat.'
    },
    {
        title: 'Cloud Community Days 2022',
        date: '2023-01-01',
        location: 'Persistent Systems Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-cloud-community-day-nagpur-2022/',
        text: 'Aute anim non Lorem Lorem id commodo nostrud. Ex esse est labore nostrud reprehenderit do dolore reprehenderit aliqua sint culpa commodo. Dolor voluptate cupidatat ea Lorem proident pariatur exercitation et. Exercitation ipsum anim elit exercitation do duis Lorem sit ex occaecat officia. Occaecat quis voluptate mollit est excepteur duis veniam. Esse commodo magna commodo duis commodo consequat do sint ullamco culpa voluptate ut officia. Nulla tempor non enim voluptate occaecat.'
    },
    {
        title: 'Cloud Community Days 2022',
        date: '2023-01-01',
        location: 'Persistent Systems Nagpur',
        link: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-cloud-community-day-nagpur-2022/',
        text: 'Aute anim non Lorem Lorem id commodo nostrud. Ex esse est labore nostrud reprehenderit do dolore reprehenderit aliqua sint culpa commodo. Dolor voluptate cupidatat ea Lorem proident pariatur exercitation et. Exercitation ipsum anim elit exercitation do duis Lorem sit ex occaecat officia. Occaecat quis voluptate mollit est excepteur duis veniam. Esse commodo magna commodo duis commodo consequat do sint ullamco culpa voluptate ut officia. Nulla tempor non enim voluptate occaecat.'
    }
]

const PastEvents = (props: Props) => {
    return (
        <div>
            <Grid container>
                <Grid
                    sx={{
                        marginLeft: '3%',

                    }}
                    xs={12} md={7}>
                    <Typography sx={{
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        "@media (max-width:780px)": {
                            fontSize: '48px'
                        }
                    }}>
                        Past Events
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
                        Take a Glimpse of our past events
                    </Typography>
                </Grid>
            </Grid>
            <Box>
                <Grid container>

                    {pastEvent.map((data: {
                        title: string,
                        date: string,
                        location: string,
                        link: string,
                        text: string,
                    }) => (

                        <Grid sx={{
                            margin: '3%', "@media (max-width:780px)": {
                                marginLeft: "5%"
                            }
                        }} xs={12} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="https://i.imgur.com/IoXjpbL.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.text}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href={data.link} size="small">Know More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </div>
    )
}

export default PastEvents