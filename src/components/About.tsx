import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Typography, Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 2rem 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <Container id="about">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom align="center"  sx={{ color: '#EC4899'}}>
            About Me
          </Typography>
        </motion.div>

        <motion.div style={{ scale, opacity }}>
          <StyledPaper elevation={3}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography variant="h5" gutterBottom>
                Hi, I'm Lakshmana! 👋
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontStyle: 'italic',
                  fontFamily: "'Roboto Slab', serif", // Custom font family
                  fontSize: '1.125rem', // Adjusted font size for readability
                  lineHeight: 1.6, // Spacing between lines
                  color: 'text.secondary', // Subtle text color
                }}
              >
                I'm a Denver-based data analyst and self-taught web developer with a passion for building elegant, functional web applications using technologies like React, TypeScript, and Node.js. With a professional background in data analysis, I bring a data-driven mindset to UI/UX decisions, problem-solving, and performance optimization. I thrive at the intersection of data and design — whether it's creating dashboards, developing intuitive interfaces, or building full-stack applications that turn insights into action.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontStyle: 'italic',
                  fontFamily: "'Roboto Slab', serif",
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: 'text.secondary',
                }}
              >
                Outside of work, I'm constantly exploring new technologies, contributing to open-source projects, and pursuing personal side projects that stretch my creativity and technical skills. I'm also passionate about design, automation, and making tech more accessible. I'm currently seeking full-time opportunities in web development or data-focused roles where I can contribute to innovative teams. I'm open to remote work and fully prepared to relocate for the right opportunity.
              </Typography>
            </motion.div>

            <Box sx={{ mt: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Typography variant="h6" gutterBottom>
                  Hobbies & Interests
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none', 
                  padding: 0,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2
                }}>
                  {['Photography', 'Travelling', 'Gaming', 'Hiking'].map((hobby, index) => (
                    <motion.li
                      key={hobby}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {hobby}
                    </motion.li>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </StyledPaper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
