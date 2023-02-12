import React from 'react'
import { styled } from '@mui/material/styles';
import Lottie from "lottie-react";
import TeamAnimation from "../../assets/Teams GDGCN.json";
import { Avatar, Grid, Box, Paper, Stack, Tabs, Tab, Typography, useMediaQuery } from "@mui/material";
import Team from './Team';
import { FaGithub, FaLinkedin } from "react-icons/fa";
let img2 = "https://i.imgur.com/tEXgqCb.png"
let img3 = "https://i.imgur.com/svZRSRh.png"


/* JSON Data */
const leads = [
    {
        "name": "Vedant Khairnar",
        "linkedin": "https://www.linkedin.com/in/vedantkhairnar/",
        "github": "https://github.com/VedantKhairnar",
        "role": "Organiser",
        "skills": "Machine Learning | Salesforce | Kubernetes"
    },
    {
        "name": "Aaniruddha Khandwe",
        "linkedin": "https://www.linkedin.com/in/aniruddha-khandwe-4008ab137/",
        "github": "https://github.com/aniruddha1khandwe",
        "role": "Co-Organiser",
        "skills": "Cybersecurity | Cloud security | Machine Learning"
    },
    {
        "name": "Sarang Prabhate",
        "linkedin": "https://www.linkedin.com/in/aniruddha-khandwe-4008ab137/",
        "github": "https://github.com/aniruddha1khandwe",
        "role": "Operations Lead",
        "skills": "Cybersecurity | Cloud security | Machine Learning"
    }
];

const domainLeads = [
    {
        "name": "Mohit Chandak",
        "linkedin": "https://www.linkedin.com/in/chandak-mohit/",
        "github": "https://github.com/mohitchandak",
        "role": "Lead Community Manager",
        "skills": "HTML | C++ | Full Stack Developer"
    },
    {
        "name": "Aaliya Ali",
        "linkedin": "https://www.linkedin.com/in/aaliyaali",
        "github": "https://github.com/Aaliya-Ali",
        "role": "Content Team Lead",
        "skills": "Learner | Flutter Dev | Technical Content Writing"
    },
    {
        "name": "Rinesh Patil",
        "linkedin": "https://www.linkedin.com/in/aaliyaali",
        "github": "https://github.com/Aaliya-Ali",
        "role": "Content Team Lead",
        "skills": "Learner | Flutter Developer"
    },
]


const Intro = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, marginTop: '5%' }}>
                <Grid container>
                    <Grid sx={{ marginLeft: '3%' }} xs={12} md={7}>
                        <Typography sx={{
                            fontSize: '52px',
                            fontWeight: 600,
                            fontFamily: 'Fira Sans',
                            "@media (max-width:780px)": {
                                fontSize: '48px'
                            }
                        }}>
                            Meet Our Team
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Fira Sans',
                            fontSize: '22px',
                            fontWeight: 500,
                            color: '#73777B',
                            position: 'relative',
                            marginTop: '-17px',
                            "@media (max-width:780px)": {
                                fontSize: '20px'
                            }
                        }} >
                            The Ones, who are making it happen......
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Fira Sans',
                            fontSize: '16px',
                            fontWeight: 400,
                            marginTop: '16px'
                        }}>
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
                        <Lottie animationData={TeamAnimation} />
                    </Grid>

                </Grid>
            </Box>

            {/* Teams Section Starts */}
            <Grid
                container
                sx={{
                    width: "100%",
                    marginTop: '6%'
                }}
            >
                <Typography sx={{
                    marginLeft: '3%',
                    fontSize: '52px',
                    fontWeight: 600,
                    fontFamily: 'Fira Sans',
                    "@media (max-width:780px)": {
                        fontSize: '38px'
                    }
                }}>
                    Leads
                </Typography>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                    style={{ margin: "20px 10px" }}
                >
                    {leads.map((data: {
                        name: string,
                        linkedin: string,
                        github: string,
                        role: string,
                        skills: string
                    }) => (
                        <Grid md={4} xs={12}>
                            <div style={{
                                backgroundSize: "140%",
                                backgroundImage: `url(${img2})`,
                                backgroundRepeat: "no-repeat",
                                margin: 30,
                                backgroundPosition: "center",
                                border: "2px solid #000",
                                borderRadius: 25,
                            }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://i.imgur.com/LvMSuHJ.png"
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        margin: 2,
                                        marginLeft: "27%",
                                        alignItems: "center",
                                    }}
                                />
                                <Typography sx={{
                                    fontFamily: "Fira Sans",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    textAlign: "center",
                                    fontSize: 25,
                                }}>
                                    {data.name}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Fira Sans",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontSize: 18,
                                    margin: 1,
                                }}>
                                    {data.role}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Fira Sans",
                                    fontStyle: "normal",
                                    fontWeight: 300,
                                    textAlign: "center",
                                    fontSize: 14,
                                }}>
                                    {data.skills}
                                </Typography>
                                <Box sx={{ marginTop: "32px" }}>
                                    <a
                                        id="a"
                                        href={data.github}
                                        style={{ marginBottom: 0, marginLeft: 25, color: '#000' }}
                                    >
                                        <FaGithub size={35}></FaGithub>
                                    </a>
                                    &nbsp;&nbsp;
                                    <a
                                        id="a"
                                        href={data.linkedin}
                                        style={{ marginBottom: 0, marginLeft: "62%", color: '#0072b1' }}
                                    >
                                        <FaLinkedin size={35} />
                                    </a>
                                </Box>
                            </div>
                        </Grid>
                    ))}

                </Grid>
            </Grid>


            <Grid
                container
                sx={{
                    width: "100%",
                }}
            >
                <Typography sx={{
                    marginLeft: '3%',
                    fontSize: '52px',
                    fontWeight: 600,
                    fontFamily: 'Fira Sans',
                    "@media (max-width:780px)": {
                        fontSize: '38px'
                    }
                }}>
                    Domain Leads
                </Typography>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                    style={{ margin: "20px 10px" }}
                >
                    {domainLeads.map((data: {
                        name: string,
                        linkedin: string,
                        github: string,
                        role: string,
                        skills: string
                    }) => (
                        <Grid md={4} xs={12}>
                            <div style={{
                                backgroundSize: "140%",
                                backgroundImage: `url(${img3})`,
                                backgroundRepeat: "no-repeat",
                                margin: 30,
                                backgroundPosition: "center",
                                border: "2px solid #000",
                                borderRadius: 25,
                            }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://i.imgur.com/LvMSuHJ.png"
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        margin: 2,
                                        marginLeft: "27%",
                                        alignItems: "center",
                                    }}
                                />
                                <Typography sx={{
                                    fontFamily: "Fira Sans",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    textAlign: "center",
                                    fontSize: 25,
                                }}>
                                    {data.name}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Fira Sans",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontSize: 18,
                                    margin: 1,
                                }}>
                                    {data.role}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "Fira Sans",
                                    fontStyle: "normal",
                                    fontWeight: 300,
                                    textAlign: "center",
                                    fontSize: 14,
                                }}>
                                    {data.skills}
                                </Typography>
                                <Box sx={{ marginTop: "32px" }}>
                                    <a
                                        id="a"
                                        href={data.github}
                                        style={{ marginBottom: 0, marginLeft: 25, color: '#000' }}
                                    >
                                        <FaGithub size={35}></FaGithub>
                                    </a>
                                    &nbsp;&nbsp;
                                    <a
                                        id="a"
                                        href={data.linkedin}
                                        style={{ marginBottom: 0, marginLeft: "62%", color: '#0072b1' }}
                                    >
                                        <FaLinkedin size={35} />
                                    </a>
                                </Box>
                            </div>
                        </Grid>
                    ))}

                </Grid>
            </Grid>
            <Team />
        </div>
    )
}

export default Intro