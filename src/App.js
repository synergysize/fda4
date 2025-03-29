import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import DataSection from './components/DataSection';
import TokenSection from './components/TokenSection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', 'Roboto', sans-serif;
    background: #0a0a12;
    color: #ffffff;
    overflow-x: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  img {
    max-width: 100%;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <DataSection />
        <TokenSection />
      </main>
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;