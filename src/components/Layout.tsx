import { useState, useEffect, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(124, 58, 237, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 70px;
  display: flex;
  justify-content: center;
`;

const StyledToolbar = styled(Toolbar)`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

const LogoText = styled(Typography)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding: 0 8px;
  font-size: 1.5rem;

  &:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 24px;
    background: linear-gradient(to bottom, #7C3AED, #EC4899);
    border-radius: 4px;
  }
`;

const NavButton = styled(Button)<{ active?: boolean }>`
  color: ${props => props.active ? '#7C3AED' : '#F1F5F9'};
  margin: 0 12px;
  padding: 6px 16px;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 8px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: ${props => props.active ? '#7C3AED' : '#F1F5F9'};
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7C3AED;
    transform: translateY(-1px);
    &:after {
      width: 100%;
      background: #7C3AED;
    }
  }
`;

const GradientBackground = styled(Box)`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #0F172A 0%,
    #1E293B 100%
  );
  position: relative;
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(124, 58, 237, 0.1) 0%,
      rgba(15, 23, 42, 0) 50%
    );
    pointer-events: none;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = useMemo(() => ['Home', 'About', 'Skills', 'Projects', 'Experience'], []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offset = 64; // AppBar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase())
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id.charAt(0).toUpperCase() + currentSection.id.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <GradientBackground>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: '#F1F5F9',
                '&:hover': {
                  background: 'rgba(124, 58, 237, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
                    <LogoText variant="h6">            Lakshmana Perla          </LogoText>
          {!isMobile && (
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <NavButton
                  key={item}
                  active={activeSection === item}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </NavButton>
              ))}
            </Box>
          )}
        </StyledToolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(30, 41, 59, 0.98)',
            backdropFilter: 'blur(12px)',
            borderRight: '1px solid rgba(124, 58, 237, 0.1)',
            color: '#F1F5F9',
            width: 250,
            '& .MuiListItem-root': {
              margin: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
            }
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(124, 58, 237, 0.1)' }}>
          <LogoText variant="h6">Lakshmana Perla</LogoText>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              key={item} 
              onClick={() => scrollToSection(item)}
              sx={{
                backgroundColor: activeSection === item ? 'rgba(124, 58, 237, 0.1)' : 'transparent',
                color: activeSection === item ? '#7C3AED' : '#F1F5F9',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  color: '#7C3AED',
                  transform: 'translateX(4px)'
                }
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '0.95rem',
                    fontWeight: activeSection === item ? 600 : 400,
                    letterSpacing: '0.5px'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ pt: '70px' }}>
        {children}
      </Box>
    </GradientBackground>
  );
};

export default Layout; 