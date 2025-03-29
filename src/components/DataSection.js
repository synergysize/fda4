import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowUp, FaArrowDown, FaDollarSign, FaSave } from 'react-icons/fa';
import { fetchCachedDogeGrants } from '../services/api';

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: #121218;
  color: #ffffff;
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
  margin: 0 auto 3rem;
  color: #b0b0b0;
  font-size: 1.2rem;
`;

const TokenMention = styled.span`
  color: #ffd700;
  font-weight: 600;
`;

const TableContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  background: rgba(30, 30, 45, 0.3);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1.2rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffd700;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    background-color: rgba(255, 215, 0, 0.1);
  }
`;

const TableRow = styled(motion.tr)`
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:nth-child(even) {
    background-color: rgba(30, 30, 50, 0.3);
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: ${props => props.highlight ? '#ffd700' : '#e0e0e0'};
  font-family: ${props => props.monospace ? 'monospace' : 'inherit'};
`;

const SortIcon = styled.span`
  margin-left: 5px;
  display: inline-block;
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(30, 30, 45, 0.5);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 1rem;
  background: rgba(255, 215, 0, 0.1);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const StatValue = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  background: linear-gradient(to right, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const StatLabel = styled.p`
  color: #b0b0b0;
  margin: 0;
  font-size: 1.1rem;
`;

const DataSection = () => {
  const [grants, setGrants] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'value', direction: 'desc' });
  const [stats, setStats] = useState({
    totalValue: 0,
    totalSavings: 0,
    averageValue: 0,
    averageSavings: 0
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCachedDogeGrants();
        const grantsData = data.result.grants;
        setGrants(grantsData);
        
        // Calculate stats
        const totalValue = grantsData.reduce((acc, grant) => acc + grant.value, 0);
        const totalSavings = grantsData.reduce((acc, grant) => acc + grant.savings, 0);
        
        setStats({
          totalValue,
          totalSavings,
          averageValue: totalValue / grantsData.length,
          averageSavings: totalSavings / grantsData.length
        });
        
        await controls.start('visible');
      } catch (error) {
        console.error('Error fetching grants data:', error);
      }
    };
    
    fetchData();
  }, [controls]);
  
  const handleSort = (key) => {
    let direction = 'asc';
    
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
    
    const sortedGrants = [...grants].sort((a, b) => {
      if (a[key] === null) return 1;
      if (b[key] === null) return -1;
      
      if (direction === 'asc') {
        return a[key] < b[key] ? -1 : 1;
      } else {
        return a[key] > b[key] ? -1 : 1;
      }
    });
    
    setGrants(sortedGrants);
  };
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const formatDate = (dateStr) => {
    return dateStr;
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  
  const tableVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };
  
  return (
    <SectionContainer id="data">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <SectionTitle variants={itemVariants}>
          DOGE API Grant Data
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants}>
          Real-time government grant data from the DOGE API, powered by <TokenMention>$FDA</TokenMention> tokenized agent technology.
        </SectionSubtitle>
        
        <StatsContainer variants={containerVariants}>
          <StatCard variants={itemVariants}>
            <StatIcon><FaDollarSign /></StatIcon>
            <StatValue>{formatCurrency(stats.totalValue)}</StatValue>
            <StatLabel>Total Grant Value</StatLabel>
          </StatCard>
          
          <StatCard variants={itemVariants}>
            <StatIcon><FaSave /></StatIcon>
            <StatValue>{formatCurrency(stats.totalSavings)}</StatValue>
            <StatLabel>Total Savings</StatLabel>
          </StatCard>
          
          <StatCard variants={itemVariants}>
            <StatIcon><FaDollarSign /></StatIcon>
            <StatValue>{formatCurrency(stats.averageValue)}</StatValue>
            <StatLabel>Average Grant Value</StatLabel>
          </StatCard>
          
          <StatCard variants={itemVariants}>
            <StatIcon><FaSave /></StatIcon>
            <StatValue>{formatCurrency(stats.averageSavings)}</StatValue>
            <StatLabel>Average Savings</StatLabel>
          </StatCard>
        </StatsContainer>
        
        <TableContainer variants={tableVariants}>
          <Table>
            <thead>
              <tr>
                <TableHeader onClick={() => handleSort('date')}>
                  Date
                  {sortConfig.key === 'date' && (
                    <SortIcon>
                      {sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
                    </SortIcon>
                  )}
                </TableHeader>
                
                <TableHeader onClick={() => handleSort('agency')}>
                  Agency
                  {sortConfig.key === 'agency' && (
                    <SortIcon>
                      {sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
                    </SortIcon>
                  )}
                </TableHeader>
                
                <TableHeader onClick={() => handleSort('recipient')}>
                  Recipient
                  {sortConfig.key === 'recipient' && (
                    <SortIcon>
                      {sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
                    </SortIcon>
                  )}
                </TableHeader>
                
                <TableHeader onClick={() => handleSort('value')}>
                  Value
                  {sortConfig.key === 'value' && (
                    <SortIcon>
                      {sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
                    </SortIcon>
                  )}
                </TableHeader>
                
                <TableHeader onClick={() => handleSort('savings')}>
                  Savings
                  {sortConfig.key === 'savings' && (
                    <SortIcon>
                      {sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
                    </SortIcon>
                  )}
                </TableHeader>
              </tr>
            </thead>
            
            <tbody>
              {grants.map((grant, index) => (
                <TableRow 
                  key={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                >
                  <TableCell>{formatDate(grant.date)}</TableCell>
                  <TableCell>{grant.agency}</TableCell>
                  <TableCell>{grant.recipient}</TableCell>
                  <TableCell highlight monospace>{formatCurrency(grant.value)}</TableCell>
                  <TableCell highlight monospace>{formatCurrency(grant.savings)}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </motion.div>
    </SectionContainer>
  );
};

export default DataSection;