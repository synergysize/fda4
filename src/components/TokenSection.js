import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaExchangeAlt, FaUsers, FaChartLine, FaCoins, FaDatabase } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #121218, #1a1a2e);
  color: #ffffff;
  overflow: hidden;
  position: relative;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: #b0b0b0;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const TokenName = styled.span`
  color: #ffd700;
  font-weight: 700;
`;

const TokenGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const TokenCard = styled(motion.div)`
  background: rgba(30, 30, 50, 0.5);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.15);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

const TokenFeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 1.5rem;
  width: 70px;
  height: 70px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TokenFeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
`;

const TokenFeatureDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

const TokenMetricsContainer = styled(motion.div)`
  background: rgba(30, 30, 50, 0.7);
  border-radius: 20px;
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 215, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const TokenMetricsTitle = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffd700;
`;

const TokenMetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const TokenMetric = styled(motion.div)`
  text-align: center;
`;

const TokenMetricValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const TokenMetricLabel = styled.div`
  color: #b0b0b0;
  font-size: 1rem;
`;

const TokenSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  
  const metricVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  
  return (
    <SectionContainer id="token">
      <BackgroundGlow />
      
      <ContentWrapper>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <SectionTitle variants={itemVariants}>
            <TokenName>$FDA</TokenName> Token Utility
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            The First Doge Agent (<TokenName>$FDA</TokenName>) token powers the entire ecosystem, providing governance rights, premium features access, and data analytics capabilities.
          </SectionSubtitle>
          
          <TokenGrid variants={containerVariants}>
            <TokenCard variants={itemVariants}>
              <TokenFeatureIcon><FaShieldAlt /></TokenFeatureIcon>
              <TokenFeatureTitle>Governance</TokenFeatureTitle>
              <TokenFeatureDescription>
                <TokenName>$FDA</TokenName> token holders participate in governance decisions, shaping the future development of the platform and voting on key protocol parameters.
              </TokenFeatureDescription>
            </TokenCard>
            
            <TokenCard variants={itemVariants}>
              <TokenFeatureIcon><FaExchangeAlt /></TokenFeatureIcon>
              <TokenFeatureTitle>Platform Access</TokenFeatureTitle>
              <TokenFeatureDescription>
                Access premium features and advanced data analytics tools by staking your <TokenName>$FDA</TokenName> tokens, unlocking the full potential of the DOGE API.
              </TokenFeatureDescription>
            </TokenCard>
            
            <TokenCard variants={itemVariants}>
              <TokenFeatureIcon><FaUsers /></TokenFeatureIcon>
              <TokenFeatureTitle>Community Rewards</TokenFeatureTitle>
              <TokenFeatureDescription>
                Earn <TokenName>$FDA</TokenName> tokens by contributing to the ecosystem, whether through data analysis, development, or community engagement activities.
              </TokenFeatureDescription>
            </TokenCard>
            
            <TokenCard variants={itemVariants}>
              <TokenFeatureIcon><FaChartLine /></TokenFeatureIcon>
              <TokenFeatureTitle>Analytics Engine</TokenFeatureTitle>
              <TokenFeatureDescription>
                <TokenName>$FDA</TokenName> tokens power the AI analytics engine, enabling real-time processing and visualization of complex DOGE API data streams.
              </TokenFeatureDescription>
            </TokenCard>
            
            <TokenCard variants={itemVariants}>
              <TokenFeatureIcon><FaCoins /></TokenFeatureIcon>
              <TokenFeatureTitle>Tokenized Data</TokenFeatureTitle>
              <TokenFeatureDescription>
                Transform raw DOGE API data into valuable tokenized assets, creating new opportunities for data-driven insights and analysis.
              </TokenFeatureDescription>
            </TokenCard>
            
            <TokenCard variants={itemVariants}>
              <TokenFeatureIcon><FaDatabase /></TokenFeatureIcon>
              <TokenFeatureTitle>Data Subscriptions</TokenFeatureTitle>
              <TokenFeatureDescription>
                Subscribe to premium data feeds and custom analytics reports using <TokenName>$FDA</TokenName> tokens, tailored to your specific requirements.
              </TokenFeatureDescription>
            </TokenCard>
          </TokenGrid>
          
          <TokenMetricsContainer variants={itemVariants}>
            <TokenMetricsTitle>Token Metrics</TokenMetricsTitle>
            
            <TokenMetricsGrid>
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>100,000,000</TokenMetricValue>
                <TokenMetricLabel>Total Supply</TokenMetricLabel>
              </TokenMetric>
              
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>$0.25</TokenMetricValue>
                <TokenMetricLabel>Initial Price</TokenMetricLabel>
              </TokenMetric>
              
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>30%</TokenMetricValue>
                <TokenMetricLabel>Platform Development</TokenMetricLabel>
              </TokenMetric>
              
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>25%</TokenMetricValue>
                <TokenMetricLabel>Community Rewards</TokenMetricLabel>
              </TokenMetric>
              
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>20%</TokenMetricValue>
                <TokenMetricLabel>Liquidity</TokenMetricLabel>
              </TokenMetric>
              
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>15%</TokenMetricValue>
                <TokenMetricLabel>Team (Locked)</TokenMetricLabel>
              </TokenMetric>
              
              <TokenMetric variants={metricVariants}>
                <TokenMetricValue>10%</TokenMetricValue>
                <TokenMetricLabel>Strategic Partnerships</TokenMetricLabel>
              </TokenMetric>
            </TokenMetricsGrid>
          </TokenMetricsContainer>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TokenSection;