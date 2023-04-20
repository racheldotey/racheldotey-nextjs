import * as React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { useTheme } from '../themes/ProvideTheme';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const LogoSmall: React.FC = () => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGOb
    </Typography>
  );
};

const LogoLarge: React.FC = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGOa
    </Typography>
  );
};

const ThemeSelectionButton: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();

  const handleSetThemeClick = (event: React.MouseEvent<HTMLElement>) => setTheme(currentTheme === 'light' ? 'dark' : 'light');

  return (
    <IconButton
      size="medium"
      aria-label="change website theme"
      aria-controls="menu-appbar"
      color="inherit"
      onClick={handleSetThemeClick}
    >
      {currentTheme === 'light' ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </IconButton>
  );
};

export const AppHeader: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElTheme, setAnchorElTheme] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleThemeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleThemeMenuClose = () => {
    setAnchorElTheme(null);
  };

  return (
    <header>
      <AppBar position="static" sx={{ marginBottom: 8 }} enableColorOnDark>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <LogoLarge />
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <LogoSmall />
            </Box>

            {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map(page => (
                <Link key={page.title} href={page.href} passHref>
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navItems.map(page => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            <Box sx={{ display: { xs: 'flex' } }}>
              <ThemeSelectionButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default AppHeader;
