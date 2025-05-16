import { motion } from 'framer-motion';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DownloadIcon from '@mui/icons-material/Download';
import styled from '@emotion/styled';

const ExperienceCard = styled(Paper)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;

const experiences = [
  
  {
    title: 'Data Analyst',
    company: 'Tata Consultancy Services',
    period: '2021 - 2023',
    description: 'Executed EDA on multi-dimensional datasets in Python, identifying actionable insights and guiding strategic business decisions. Designed statistical models like regression, clustering, and ANOVA to predict customer behavior and support strategic planning. Crafted Tableau dashboards to visualize KPIs, enabling stakeholders to derive actionable insights and foster data-driven decisions. Performed root cause analysis of performance metrics through correlation and variance analysis, identifying key revenue drivers. Conducted benchmarking and market analysis, evaluating positioning, identifying opportunities, and guiding business strategies. Leveraged predictive analytics techniques like logistic regression and ML to forecast customer retention and revenue growth. Applied time-series analysis to uncover trends, seasonality, and anomalies in metrics, improving business forecasting accuracy. Executed sentiment analysis and text mining with NLP, assessing survey data to evaluate satisfaction and product feedback trends. Defined KPIs with cross-functional teams, aligning analytical objectives with business strategy to track and improve outcomes.'
  },
  {
    title: 'Technical Assistant',
    company: 'IBM',
    period: '2018 - 2019',
    description: 'Delivered tutorials on statistical modeling, regression, and EDA, fostering a deeper understanding of analytical concepts. Provided mentorship on projects involving clustering, forecasting, and hypothesis testing, enhancing student learning outcomes.'
  }
];

const Experience = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Lakshmana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box id="experience" component="section">
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
              Professional Experience
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadResume}
              sx={{
                backgroundColor: 'rgba(75, 0, 130, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(75, 0, 130, 1)',
                }
              }}
            >
              Download Resume
            </Button>
          </Box>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.period}>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                  >
                    <ExperienceCard elevation={3}>
                      <Typography variant="h6" component="h3" color="primary">
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {exp.company}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        {exp.period}
                      </Typography>
                      <Typography variant="body2">
                        {exp.description}
                      </Typography>
                    </ExperienceCard>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 