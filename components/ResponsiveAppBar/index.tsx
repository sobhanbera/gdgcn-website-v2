import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const pages = [
    {route: '/home', name: 'Home'},
    {route: '/aboutus', name: 'About Us'},
    {route: '/team', name: 'Team'},
    {route: '/events', name: 'Events'},
    {route: '/sponsors', name: 'Sponsors & Partners'},
    {route: '/contactus', name: 'Contact Us'},
    {route: '/faqs', name: 'FAQs'},
]

interface ResponsiveAppBarProps {}
export const ResponsiveAppBar = (_props: ResponsiveAppBarProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null,
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{backgroundColor: '#E9E8E8'}}>
                <Toolbar>
                    <Box
                        sx={{flexGrow: 0.2, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="medium"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color={'#000000'}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}>
                            {pages.map(pageData => (
                                <a href={pageData.route}>
                                    <MenuItem
                                        key={pageData.route}
                                        onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign="center"
                                            sx={{textTransform: 'none'}}>
                                            {pageData.name}
                                        </Typography>
                                    </MenuItem>
                                </a>
                            ))}
                        </Menu>
                    </Box>
                    <img
                        alt="Your logo."
                        src="https://i.imgur.com/CQdQVc1.png"
                        style={{width: '290px'}}
                    />
                    {/* Desktop version code starts */}

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map(pageData => (
                            <a href={pageData.route}>
                                <Button
                                    key={pageData.route}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        mx: 1.5,
                                        my: 2,
                                        color: 'black',
                                        display: 'block',
                                        textTransform: 'none',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                    }}>
                                    {pageData.name}
                                </Button>
                            </a>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
