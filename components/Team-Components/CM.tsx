import React from 'react'
import { Avatar, Grid, Box, Typography } from "@mui/material";
let img7 = "https://i.imgur.com/qBqZF3h.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const communityManagers = [
    {
        "name": "Chandrakant Bobdae",
        "linkedin": "https://www.linkedin.com/in/chandrakant22/",
        "github": "https://github.com/chandrakant22",
        "role": "Community Manager",
        "skills": "Full Stack | Java Dev. | Tech Educator"
    },
    {
        "name": "Stuti Agrawal",
        "linkedin": "https://www.linkedin.com/in/stuti-agrawal-2417a2238/",
        "github": "https://github.com/Stutiagrawal10",
        "role": "Community Manager",
        "skills": "Problem Solver | Backend Developer"
    },
    {
        "name": "Naincy Pande",
        "linkedin": "www.linkedin.com/in/naincy-pande",
        "github": "https://github.com/Naincy05",
        "role": "Community Manager",
        "skills": "Content Writing | Public Speaking"
    },
    {
        "name": "Shweta Choulwar",
        "linkedin": "https://www.linkedin.com/in/shweta-choulwar-362184251/",
        "github": "https://github.com/Shweta-Choulwar",
        "role": "Community Manager",
        "skills": "Problem Solver | Time Management"
    }
];


const CM = () => {
    return (
        <div>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
                {communityManagers.map((data: {
                    name: string,
                    linkedin: string,
                    github: string,
                    role: string,
                    skills: string
                }) => (
                    <Grid sx={{
                        "@media (max-width:780px)": {
                            margin: '0px 35px'
                        }
                    }} md={3} xs={12}>
                        <div style={{
                            backgroundSize: "140%",
                            backgroundImage: `url(${img7})`,
                            backgroundRepeat: "no-repeat",
                            margin: 20,
                            backgroundPosition: "center",
                            border: "2px solid #000",
                            borderRadius: 25,
                        }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://i.imgur.com/LvMSuHJ.png"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    margin: 2,
                                    marginLeft: "27%",
                                    alignItems: "center",
                                    "@media (max-width:780px)": {
                                        width: 150,
                                        height: 150,
                                    }
                                }}
                            />
                            <Typography sx={{
                                fontFamily: "Fira Sans",
                                fontStyle: "normal",
                                fontWeight: 600,
                                textAlign: "center",
                                fontSize: 22,
                                "@media (max-width:780px)": {
                                    fontSize: 25,
                                }
                            }}>
                                {data.name}
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Fira Sans",
                                fontStyle: "normal",
                                fontWeight: 400,
                                textAlign: "center",
                                fontSize: 16,
                                margin: 1,
                                "@media (max-width:780px)": {
                                    fontSize: 18,
                                }
                            }}>
                                {data.role}
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Fira Sans",
                                fontStyle: "normal",
                                fontWeight: 300,
                                textAlign: "center",
                                fontSize: 13,
                                "@media (max-width:780px)": {
                                    fontSize: 14
                                }
                            }}>
                                {data.skills}
                            </Typography>
                            <Box sx={{ marginTop: "32px" }}>
                                <a
                                    id="a"
                                    href={data.github}
                                    style={{ marginBottom: 0, marginLeft: "10%", color: '#000' }}
                                >
                                    <FaGithub size={35}></FaGithub>
                                </a>
                                &nbsp;&nbsp;
                                <a
                                    id="a"
                                    href={data.linkedin}
                                    style={{ marginBottom: 0, marginLeft: "50%", color: '#0072b1' }}
                                >
                                    <FaLinkedin size={35} />
                                </a>
                            </Box>
                        </div>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default CM