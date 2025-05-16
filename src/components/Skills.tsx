import { motion } from 'framer-motion';
import { Container, Typography, Box, Paper, LinearProgress } from '@mui/material';
import styled from '@emotion/styled';


const SkillCard = styled(Paper)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillsSection = styled(Box)`
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.8) 0%,
    rgba(15, 23, 42, 0.9) 50%,
    rgba(15, 23, 42, 0.8) 100%
  );
`;

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const skills = [
  {
    category: 'Programming Analysis',
    items: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'PANDAS', level: 95 },
      { name: 'R', level: 60 }
    ]
  },
  {
    category: 'Data Visualization',
    items: [
      { name: 'Tableau', level: 85 },
      { name: 'Power BI', level: 80 },
      { name: 'Seaborn', level: 75 },
      { name: 'Data Storytelling', level: 70 }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 }
    ]
  },
  {
    category: 'Statistical Modeling & Analytics',
    items: [
      { name: 'Linear/Logistic Regression', level: 85 },
      { name: 'Clustering', level: 80 },
      { name: 'ANOVA & Hypothesis Testing', level: 75 },
      { name: 'A/B Testing', level: 80 },
      { name: 'Time-Series Analysis', level: 70 },
      { name: 'Sentiment Analysis', level: 65 },
      { name: 'Text Mining (NLP)', level: 70 }
    ]
  },
  {
    category: 'Database & Query Optimization',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Indexing & Query Tuning', level: 80 },
      { name: 'Stored Procedures & Triggers', level: 70 },
      { name: 'Database Normalization', level: 75 },
      { name: 'ACID & Transaction Management', level: 80 },
      { name: 'ETL Pipelines', level: 75 }
    ]
  },
  
  {
    category: 'Software Development (SDE)',
    items: [
      { name: 'Data Structures & Algorithms', level: 90 },
      { name: 'Object-Oriented Programming (OOP)', level: 85 },
      { name: 'System Design', level: 70 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Git & Version Control', level: 90 },
      { name: 'Unit Testing', level: 75 },
      { name: 'Agile & Scrum', level: 80 }
    ]
  }
];



const Skills = () => {
  return (
    <SkillsSection id="skills">
     
      <ContentContainer maxWidth="lg">
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
              mb: 4,
              textShadow: '0 0 30px rgba(124, 58, 237, 0.3)'
            }}
          >
            Skills & Expertise
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
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <SkillCard elevation={3}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: '#7C3AED',
                  textShadow: '0 0 20px rgba(124, 58, 237, 0.3)'
                }}>
                  {skillCategory.category}
                </Typography>
                {skillCategory.items.map((skill, skillIndex) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Typography variant="body1" gutterBottom sx={{ color: '#F1F5F9' }}>
                      {skill.name}
                    </Typography>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 1 }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(to right, #7C3AED, #EC4899)',
                          },
                        }}
                      />
                    </motion.div>
                  </Box>
                ))}
              </SkillCard>
            </motion.div>
          ))}
        </Box>
      </ContentContainer>
    </SkillsSection>
  );
};

export default Skills; 