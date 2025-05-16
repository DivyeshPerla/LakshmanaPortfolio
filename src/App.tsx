import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './styles/fonts.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED', // vibrant purple
      light: '#9F67FF',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#EC4899', // pink
      light: '#F472B6',
      dark: '#BE185D',
    },
    background: {
      default: '#0F172A', // dark blue-gray
      paper: '#1E293B',
    },
    text: {
      primary: '#F1F5F9', // light gray
      secondary: '#94A3B8', // medium gray
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#F1F5F9',
      fontWeight: 700,
    },
    h2: {
      color: '#F1F5F9',
      fontWeight: 600,
    },
    h3: {
      color: '#F1F5F9',
      fontWeight: 600,
    },
    h4: {
      color: '#F1F5F9',
      fontWeight: 500,
    },
    body1: {
      color: '#E2E8F0',
    },
    body2: {
      color: '#CBD5E1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
