import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaRobot, FaCoins } from 'react-icons/fa';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #121212, #1e1e2d);
`;

const GlowOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.15) 0%, transparent 70%);
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #e0e0e0;
  max-width: 800px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #121212;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.25);
`;

const SecondaryButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  color: #ffd700;
  border: 2px solid #ffd700;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.1);
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(30, 30, 45, 0.5);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ffd700;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FeatureDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

const TokenHighlight = styled.span`
  color: #ffd700;
  font-weight: 700;
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <HeroContainer id="home">
      <GlowOverlay />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          First Doge Agent <TokenHighlight>($FDA)</TokenHighlight>
        </Title>
        
        <Subtitle variants={itemVariants}>
          The official tokenized agent powered by the DOGE API, providing real-time access to government grant data with cutting-edge AI capabilities.
        </Subtitle>
        
        <ButtonGroup variants={itemVariants}>
          <PrimaryButton
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(255, 215, 0, 0.35)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket /> Explore $FDA
          </PrimaryButton>
          
          <SecondaryButton
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(255, 215, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChartLine /> View DOGE Data
          </SecondaryButton>
        </ButtonGroup>
        
        <FeatureGrid variants={itemVariants}>
          <FeatureCard
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <FeatureIcon><FaRobot /></FeatureIcon>
            <FeatureTitle>AI-Powered Insights</FeatureTitle>
            <FeatureDescription>
              Advanced AI algorithms analyze DOGE API data to provide actionable insights and predictions on government grants.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <FeatureIcon><FaCoins /></FeatureIcon>
            <FeatureTitle>Tokenized Governance</FeatureTitle>
            <FeatureDescription>
              <TokenHighlight>$FDA</TokenHighlight> token holders gain voting rights on platform development and future integrations.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <FeatureIcon><FaChartLine /></FeatureIcon>
            <FeatureTitle>Real-time Analytics</FeatureTitle>
            <FeatureDescription>
              Access comprehensive analytics and visualizations of government funding data through the DOGE API.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;