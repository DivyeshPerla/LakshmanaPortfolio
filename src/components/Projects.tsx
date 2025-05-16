import { motion } from 'framer-motion';
import { Container, Typography, Box, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled from '@emotion/styled';

const ProjectCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-5px);
  }
`;

const projects = [
  {
    title: 'Pizza Studio Website',
    description: 'Its a visually engaging, interactive web application built with React, Vite, and TypeScript.',
    image: '/images/ecommerce.jpg', // Local image path
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/DivyeshPerla',
    demo: 'https://rainbow-squirrel-26f120.netlify.app/'
  },
  {
    title: 'Covid-19 March Data Transformation and Insights',
    description: 'The Covid-19 Infection ETL Project analyzes global Covid-19 data from March 2020 by extracting, transforming, and loading it into a PostgreSQL database to derive insights on confirmed cases, deaths, and recoveries.',
    image: '/images/task.jpg',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/DivyeshPerla/ETL--Project2',
    demo: 'https://demo.com'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using OpenAI API and Next.js.',
    image: '/images/ai.jpg',
    technologies: ['Next.js', 'OpenAI', 'TailwindCSS'],
    github: 'https://github.com/DivyeshPerla',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  return (
    <Box id="projects" component="section">
      <Container>
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              gutterBottom 
              align="center"
              sx={{
                background: 'linear-gradient(to right, #7C3AED, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)'
            },
            gap: 4,
            mt: 4
          }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <ProjectCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(75, 0, 130, 0.2)',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </Button>
                  </CardActions>
                </ProjectCard>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 