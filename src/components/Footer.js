import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaGithub, FaMedium, FaCoins } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 4rem 2rem 2rem;
  background: linear-gradient(to top, #0a0a12, #121218);
  color: #ffffff;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

const FooterDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FooterHeading = styled.h4`
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(motion.a)`
  color: #b0b0b0;
  text-decoration: none;
  margin-bottom: 0.7rem;
  display: block;
  transition: color 0.2s;
  
  &:hover {
    color: #ffd700;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffd700;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  
  &:hover {
    background-color: rgba(255, 215, 0, 0.2);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 3rem;
  color: #707070;
  font-size: 0.9rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const TokenText = styled.span`
  color: #ffd700;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCoins /> FIRST DOGE AGENT
          </FooterLogo>
          <FooterDescription>
            The official tokenized agent platform powered by DOGE API. <TokenText>$FDA</TokenText> provides AI-powered insights and analytics for government grant data.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram />
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDiscord />
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaMedium />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <li><FooterLink href="#home" whileHover={{ x: 5 }}>Home</FooterLink></li>
            <li><FooterLink href="#about" whileHover={{ x: 5 }}>About</FooterLink></li>
            <li><FooterLink href="#features" whileHover={{ x: 5 }}>Features</FooterLink></li>
            <li><FooterLink href="#data" whileHover={{ x: 5 }}>DOGE Data</FooterLink></li>
            <li><FooterLink href="#chat" whileHover={{ x: 5 }}>AI Assistant</FooterLink></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Documentation</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Whitepaper</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>API Endpoints</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>GitHub Repository</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Community Forums</FooterLink></li>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterLinks>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Support</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Partnerships</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Careers</FooterLink></li>
            <li><FooterLink href="#" whileHover={{ x: 5 }}>Press Kit</FooterLink></li>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} First Doge Agent (<TokenText>$FDA</TokenText>). All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;