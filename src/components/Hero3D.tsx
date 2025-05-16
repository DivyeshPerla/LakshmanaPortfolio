import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography, Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    circle at center,
    rgba(124, 58, 237, 0.1) 0%,
    rgba(15, 23, 42, 0) 50%
  );
`;

const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const TextOverlay = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  width: 100%;
`;

const GradientText = styled(Typography)`
  background: linear-gradient(45deg, #7C3AED, #EC4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Clash Display', sans-serif;
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    top: -20%;
    left: -20%;
    right: -20%;
    bottom: -20%;
    background: radial-gradient(
      circle at center,
      rgba(124, 58, 237, 0.2) 0%,
      rgba(15, 23, 42, 0) 70%
    );
    z-index: -1;
    pointer-events: none;
  }
`;

const RoleText = styled(Typography)`
  font-family: 'Cabinet Grotesk', sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  &::before, &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 30px;
    background: linear-gradient(90deg, #7C3AED, transparent);
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    right: 100%;
    margin-right: 15px;
  }

  &::after {
    left: 100%;
    margin-left: 15px;
    background: linear-gradient(90deg, transparent, #EC4899);
  }
`;

const ScrollDownButton = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
`;

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} position={[0, 0, 0]} scale={2.5}>
      <MeshDistortMaterial
        color="#7C3AED"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.5}
        opacity={0.8}
        transparent
      />
    </Sphere>
  );
};

const Hero3D = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <CanvasContainer style={{ y, opacity }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate={false}
          />
        </Canvas>
      </CanvasContainer>

      <TextOverlay>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GradientText 
            variant="h1" 
            sx={{ 
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '2.75rem', md: '4.5rem' },
              lineHeight: 1.1,
              textAlign: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '4px',
                background: 'linear-gradient(90deg, #7C3AED, #EC4899)',
                borderRadius: '2px'
              }
            }}
          >
            Lakshmana Perla
          </GradientText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <RoleText 
              variant="h4" 
              sx={{ 
                color: '#F1F5F9',
                fontSize: { xs: '1.25rem', md: '1.75rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                mb: 2
              }}
            >
              Solopreneur
            </RoleText>

            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: 640,
                mx: 'auto',
                px: { xs: 3, md: 0 },
                color: '#E2E8F0',
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 400,
                mt: 3,
                lineHeight: 1.7,
                fontFamily: '"DM Sans", "Inter", sans-serif',
                letterSpacing: '0.015em'
              }}
            >
              I’m a Data Analyst by profession with a deep-rooted passion for building impactful digital experiences. While my core expertise lies in data-driven insights, I’m equally drawn to the creativity and problem-solving that web development offers. I aim to bridge the gap between data and design—crafting intuitive, user-centric applications that are both functional and visually engaging.
            </Typography>
          </motion.div>
        </motion.div>
      </TextOverlay>

      <ScrollDownButton
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleScrollDown}
      >
        <Button
          sx={{
            color: '#F1F5F9',
            borderRadius: '50%',
            minWidth: 'auto',
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(124, 58, 237, 0.3)',
            }
          }}
        >
          <KeyboardArrowDownIcon />
        </Button>
      </ScrollDownButton>
    </HeroContainer>
  );
};

export default Hero3D;
