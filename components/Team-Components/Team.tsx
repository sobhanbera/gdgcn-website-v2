import React from 'react'
import {Grid, Box, Tabs, Tab, Typography, useMediaQuery} from '@mui/material'
import MTS from './MTS'
import CM from './CM'
import CT from './CT'
import GT from './GT'
import GE from './GE'

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function BasicTabs() {
    const phoneView = useMediaQuery('(max-width:800px)')
    return phoneView ? <PhoneView /> : <DesktopView />
}

const DesktopView = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div>
            <Grid
                container
                sx={{
                    width: '100%',
                    justifyContent: 'center',
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    TabIndicatorProps={{style: {background: '#fff'}}}>
                    <Tab
                        sx={{
                            width: 'auto',
                            mt: 2,
                            mb: 2,
                            mr: 1,
                            borderRadius: '10px',
                            border: '2px solid #000',
                            '&:hover': {
                                backgroundColor: '#FFDDB6',
                            },
                            color: 'black',
                        }}
                        label="Community Managers"
                        {...a11yProps(0)}
                    />

                    <Tab
                        sx={{
                            borderRadius: '10px',
                            width: 'auto',
                            mt: 2,
                            mb: 2,
                            mr: 1,
                            border: '2px solid #000',
                            '&:hover': {
                                backgroundColor: '#EA9292',
                            },
                            color: 'black',
                        }}
                        label="Member of Technical Staff"
                        {...a11yProps(1)}
                    />

                    <Tab
                        sx={{
                            borderRadius: '10px',
                            width: 'auto',
                            mt: 2,
                            mb: 2,
                            mr: 1,
                            border: '2px solid #000',
                            '&:hover': {
                                backgroundColor: '#97E8AF',
                            },
                            color: 'black',
                        }}
                        label="Content Writers"
                        {...a11yProps(2)}
                    />
                    <Tab
                        sx={{
                            borderRadius: '10px',
                            width: 'auto',
                            mt: 2,
                            mb: 2,
                            mr: 1,
                            border: '2px solid #000',
                            '&:hover': {
                                backgroundColor: '#FBF198',
                            },
                            color: 'black',
                        }}
                        label="Graphic Designers"
                        {...a11yProps(3)}
                    />

                    <Tab
                        sx={{
                            borderRadius: '10px',
                            width: 'auto',
                            mt: 2,
                            mb: 2,
                            mr: 1,
                            border: '2px solid #000',
                            '&:hover': {
                                backgroundColor: '#A098FB',
                            },
                            color: 'black',
                        }}
                        label="Growth Expert"
                        {...a11yProps(4)}
                    />
                </Tabs>
            </Grid>

            <Grid item xs={12}>
                <TabPanel value={value} index={0}>
                    <CM />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <MTS />
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <CT />
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <GT />
                </TabPanel>

                <TabPanel value={value} index={4}>
                    <GE />
                </TabPanel>
            </Grid>
        </div>
    )
}

const PhoneView = () => {
    return (
        <div>
            <Grid
                container
                sx={{
                    width: '100%',
                }}>
                <Typography
                    sx={{
                        marginLeft: '3%',
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        '@media (max-width:780px)': {
                            fontSize: '38px',
                        },
                    }}>
                    Member of Technical Staff
                </Typography>
                <MTS />
            </Grid>
            <Grid
                container
                sx={{
                    width: '100%',
                }}>
                <Typography
                    sx={{
                        marginLeft: '3%',
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        '@media (max-width:780px)': {
                            fontSize: '38px',
                        },
                    }}>
                    Community Managers
                </Typography>
                <CM />
            </Grid>
            <Grid
                container
                sx={{
                    width: '100%',
                }}>
                <Typography
                    sx={{
                        marginLeft: '3%',
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        '@media (max-width:780px)': {
                            fontSize: '38px',
                        },
                    }}>
                    Content Writers
                </Typography>
                <CT />
            </Grid>
            <Grid
                container
                sx={{
                    width: '100%',
                }}>
                <Typography
                    sx={{
                        marginLeft: '3%',
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        '@media (max-width:780px)': {
                            fontSize: '38px',
                        },
                    }}>
                    Graphic Designers
                </Typography>
                <GT />
            </Grid>
            <Grid
                container
                sx={{
                    width: '100%',
                }}>
                <Typography
                    sx={{
                        marginLeft: '3%',
                        fontSize: '52px',
                        fontWeight: 600,
                        fontFamily: 'Fira Sans',
                        '@media (max-width:780px)': {
                            fontSize: '38px',
                        },
                    }}>
                    Growth Experts
                </Typography>
                <GE />
            </Grid>
        </div>
    )
}
