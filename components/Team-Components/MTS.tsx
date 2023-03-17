import React from 'react'
import {Avatar, Grid, Box, Typography} from '@mui/material'
let img3 = 'https://i.imgur.com/dLBY0dP.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const mts = [
    {
        name: 'Kush Munot',
        image:'https://i.imgur.com/LvMSuHJ.png',
        linkedin: 'https://www.linkedin.com/in/kush-munot/',
        github: 'https://github.com/Kush-munot',
        role: 'Member of Technical Staff',
        skills: 'Full Stack Dev. | React.js | Leadership',
    },
    {
        name: 'Sobhan Bera',
        image:'https://i.imgur.com/6ULaxUR.jpg',
        linkedin: 'https://www.linkedin.com/in/sobhanbera',
        github: 'https://github.com/sobhanbera',
        role: 'Member of Technical Staff',
        skills: 'Full-Stack Dev | React-Native Dev | UI/UX ',
    },
    {
        name: 'Dewansh Chaudhari',
        image:'https://i.imgur.com/fKOSKXc.jpg',
        linkedin: 'https://www.linkedin.com/in/dewansh-chaudhari-252252195/',
        github: 'https://github.com/dewanshchaudhari',
        role: 'Member of Technical Staff',
        skills: 'NodeJS | ReactJS | AWS',
    },
    {
        name: 'Shubham Jeswani',
        image:'https://i.imgur.com/9F99nmf.png',
        linkedin: 'https://www.linkedin.com/in/skjeswani/',
        github: 'https://github.com/skjeswani2001',
        role: 'Member of Technical Staff',
        skills: 'Flutter | React JS | Video Editing',
    },
]

const MTS = () => {
    return (
        <div>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{xs: 1, sm: 1, md: 1}}>
                {mts.map(
                    (data: {
                        name: string
                        image:string
                        linkedin: string
                        github: string
                        role: string
                        skills: string
                    }) => (
                        <Grid
                            sx={{
                                '@media (max-width:780px)': {
                                    margin: '0px 35px',
                                },
                            }}
                            md={3}
                            xs={12}>
                            <div
                                style={{
                                    backgroundSize: '140%',
                                    backgroundImage: `url(${img3})`,
                                    backgroundRepeat: 'no-repeat',
                                    margin: 20,
                                    backgroundPosition: 'center',
                                    border: '2px solid #000',
                                    borderRadius: 25,
                                }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={data.image}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        margin: 2,
                                        marginLeft: '27%',
                                        alignItems: 'center',
                                        '@media (max-width:780px)': {
                                            width: 150,
                                            height: 150,
                                        },
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontFamily: 'Fira Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        textAlign: 'center',
                                        fontSize: 22,
                                        '@media (max-width:780px)': {
                                            fontSize: 25,
                                        },
                                    }}>
                                    {data.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Fira Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        textAlign: 'center',
                                        fontSize: 16,
                                        margin: 1,
                                        '@media (max-width:780px)': {
                                            fontSize: 18,
                                        },
                                    }}>
                                    {data.role}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Fira Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 300,
                                        textAlign: 'center',
                                        fontSize: 13,
                                        '@media (max-width:780px)': {
                                            fontSize: 14,
                                        },
                                    }}>
                                    {data.skills}
                                </Typography>
                                <Box sx={{marginTop: '32px'}}>
                                    <a
                                        id="a"
                                        href={data.github}
                                        style={{
                                            marginBottom: 0,
                                            marginLeft: '10%',
                                            color: '#000',
                                        }}>
                                        <FaGithub size={35}></FaGithub>
                                    </a>
                                    &nbsp;&nbsp;
                                    <a
                                        id="a"
                                        href={data.linkedin}
                                        style={{
                                            marginBottom: 0,
                                            marginLeft: '50%',
                                            color: '#0072b1',
                                        }}>
                                        <FaLinkedin size={35} />
                                    </a>
                                </Box>
                            </div>
                        </Grid>
                    ),
                )}
            </Grid>
        </div>
    )
}

export default MTS
