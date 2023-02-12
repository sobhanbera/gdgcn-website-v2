import React from 'react'
import { styled } from '@mui/material/styles';
import { Avatar, Grid, Box, Paper, Stack, Tabs, Tab, Typography, useMediaQuery } from "@mui/material";
import img1 from "../../assets/Group16.png";
import img4 from "../../assets/GroupK.png";
import img5 from "../../assets/GroupP.png";
import img6 from "../../assets/GroupT.png";
import img7 from "../../assets/GroupY.png";
import img8 from "../../assets/GroupTE.png";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const phoneView = useMediaQuery("(max-width:800px)");
    /* return phoneView ? <PhoneView /> : <DesktopView />; */
    return <DesktopView />;
}

const DesktopView = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (

        <Grid
            container
            sx={{
                width: "100%",
                justifyContent: "center",
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                TabIndicatorProps={{ style: { background: '#fff' } }}
            >
                <Tab
                    sx={{

                        width: "auto",
                        mt: 2,
                        mb: 2,
                        mr: 1,
                        borderRadius: "10px",
                        border: '2px solid #000',
                        "&:hover": {
                            backgroundColor: "#FFDDB6"
                        },
                        color: "black",
                    }}
                    label="Community Managers"
                    {...a11yProps(0)}
                />

                <Tab
                    sx={{

                        borderRadius: "10px",
                        width: "auto",
                        mt: 2,
                        mb: 2,
                        mr: 1,
                        border: '2px solid #000',
                        "&:hover": {
                            backgroundColor: "#EA9292",
                        },
                        color: "black",
                    }}
                    label="Member of Technical Staff"
                    {...a11yProps(1)}
                />

                <Tab
                    sx={{

                        borderRadius: "10px",
                        width: "auto",
                        mt: 2,
                        mb: 2,
                        mr: 1,
                        border: '2px solid #000',
                        "&:hover": {
                            backgroundColor: "#97E8AF",
                        },
                        color: "black",
                    }}
                    label="Content Writers"
                    {...a11yProps(2)}
                />
                <Tab
                    sx={{

                        borderRadius: "10px",
                        width: "auto",
                        mt: 2,
                        mb: 2,
                        mr: 1,
                        border: '2px solid #000',
                        "&:hover": {
                            backgroundColor: "#FBF198",
                        },
                        color: "black",
                    }}
                    label="Graphic Designers"
                    {...a11yProps(3)}
                />

                <Tab
                    sx={{

                        borderRadius: "10px",
                        width: "auto",
                        mt: 2,
                        mb: 2,
                        mr: 1,
                        border: '2px solid #000',
                        "&:hover": {
                            backgroundColor: "#A098FB",
                        },
                        color: "black",
                    }}
                    label="Growth Expert"
                    {...a11yProps(4)}
                />
            </Tabs>
        </Grid>
    );
};

const PhoneView = () => {
    return (
        <h1>Phone view</h1>
    );
};