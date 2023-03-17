import React from 'react'
import {Avatar, Grid, Box, Typography} from '@mui/material'
let img6 = 'https://i.imgur.com/RFZ80U9.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
const techWriter = [
    {
        name: 'Neenad Sahasrabuddhe',
        image:'https://i.imgur.com/dse9EZe.png',
        linkedin: 'https://linkedin.com/in/neenad-sahasrabuddhe-1017841a4/',
        github: 'https://github.com/nenu3414',
        role: 'Technical Content Writer',
        skills: 'React.Js | Next.Js |  Frontend Development',
    },
    {
        name: 'Samiksha Kachore',
        image:'https://i.imgur.com/yxckv4o.jpg',
        linkedin: 'https://www.linkedin.com/in/samiksha-kachore',
        github: 'https://github.com/samikshakachore?tab=stars',
        role: 'Technical Content writing',
        skills: 'Content Writing | Leadership | Python',
    },
    {
        name: 'Shailesh Kumar Thakur',
        image:'https://i.imgur.com/NyJnz3w.jpg',
        linkedin: 'https://www.linkedin.com/in/shailesh-kumar-thakur-991316205',
        github: 'https://github.com/shaileshthakur1',
        role: ' Technical Content Writer',
        skills: 'Opensource | DevOps | Public speaking',
    },
    {
        name: 'Abhilasha Walke',
        image:'https://i.imgur.com/w68ndP0.jpg',
        linkedin: 'http://www.linkedin.com/in/abhilasha-walke-923817262',
        github: '-',
        role: ' Technical Content writer',
        skills: 'Leadership | Event Management ',
    },
]

const CM = () => {
    return (
        <div>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{xs: 1, sm: 1, md: 1}}>
                {techWriter.map(
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
                                    backgroundImage: `url(${img6})`,
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

export default CM
