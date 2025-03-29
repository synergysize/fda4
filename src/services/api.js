import axios from 'axios';

// API base URL
const API_BASE_URL = 'https://api.doge.gov';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Function to fetch grants data from DOGE API
export const fetchDogeGrants = async (params = {}) => {
  try {
    const defaultParams = {
      sort_by: 'value',
      sort_order: 'desc',
      page: 1,
      per_page: 10
    };
    
    const queryParams = { ...defaultParams, ...params };
    
    const response = await apiClient.get('/savings/grants', { params: queryParams });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching DOGE grants:', error);
    throw error;
  }
};

// Mock function to fetch cached data if API is unavailable
export const fetchCachedDogeGrants = async () => {
  // This is a fallback to use the data we retrieved earlier
  const cachedData = {
    "success": true,
    "result": {
      "grants": [
        {
          "date": "3/1/2025",
          "agency": "USAID",
          "recipient": "GAVI FOUNDATION",
          "value": 4000000000,
          "savings": 0,
          "link": "https://usaspending.gov/award/ASST_NON_7200GH21IO00002_7200",
          "description": "NEW PIO GAVI COVAX-TO PREVENT, PREPARE FOR , AND RESPOND TO CORONAVIRUS, INCLUDING FOR VACCINE PROCUREMENT AND DELIVERY."
        },
        {
          "date": "3/1/2025",
          "agency": "USAID",
          "recipient": "GAVI FOUNDATION",
          "value": 2630000000,
          "savings": 1750000000,
          "link": "https://usaspending.gov/award/ASST_NON_7200GH22IO00006_7200",
          "description": "THE 2021-2025 STRATEGY (GAVI 5.0), WHICH WAS APPROVED BY THE GAVI BOARD  IN JUNE 2019, BUILDS ON THE ALLIANCE'S YEARS OF DEMONSTRATED SUCCESS AND STRIVES TOWARD ITS VISION  TO "LEAVE NO ONE BEHIND WITH IMMUNIZATION." TO INCREASE COVERAGE AND EQUITY, GAVI 5.0  PRIORITIZES "ZERO-DOSE" CHILDREN WHO HAVE NOT RECEIVED A SINGLE VACCINE SHOT AS WELL AS MISSED  COMMUNITIES. THE ZERO-DOSE AGENDA IS ALSO A KEY PRIORITY FOR THE GLOBAL COMMUNITY'S  IMMUNIZATION AGENDA 2030, WHICH WAS ENDORSED BY THE WORLD HEALTH ASSEMBLY IN MAY 2020."
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "PUBLIC HEALTH FOUNDATION ENTERPRISES, INC",
          "value": 1696424899,
          "savings": 482383724,
          "link": null,
          "description": null
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "TX DEPT OF STATE HEALTH SERVICES",
          "value": 1535405092,
          "savings": 877628206,
          "link": null,
          "description": null
        },
        {
          "date": "3/1/2025",
          "agency": "USAID",
          "recipient": "INTERNATIONAL BANK FOR RECONSTRUCTION AND DEVELOPMENT",
          "value": 1300000000,
          "savings": 372500000,
          "link": null,
          "description": null
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "HEALTH, FLORIDA DEPARTMENT OF",
          "value": 1236223812,
          "savings": 482136996,
          "link": null,
          "description": null
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "NEW YORK, CITY OF",
          "value": 807512729,
          "savings": 39516923,
          "link": null,
          "description": null
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "RESEARCH TRIANGLE INSTITUTE",
          "value": 716790486,
          "savings": 428698791,
          "link": null,
          "description": null
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "HEALTH RESEARCH, INC.",
          "value": 700248982,
          "savings": 62262226,
          "link": null,
          "description": null
        },
        {
          "date": "3/23/2025",
          "agency": "Department of Health and Human Services",
          "recipient": "STATE OF OHIO - DEPARTMENT OF HEALTH",
          "value": 672805694,
          "savings": 220743894,
          "link": null,
          "description": null
        }
      ]
    },
    "meta": {
      "total_results": 9221,
      "pages": 923
    }
  };
  
  return cachedData;
};

// AI Service
export const chatWithAI = async (message) => {
  try {
    // This is for demonstration, in a real scenario, you'd integrate with the AI API
    // Using the API key: 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
    
    // For now, we'll simulate responses based on the grant data
    const grantsData = await fetchCachedDogeGrants();
    
    // Check if the message contains keywords we can respond to
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('grant') || lowerMessage.includes('funding')) {
      return {
        message: `Based on our data, we have information on ${grantsData.result.grants.length} major grants. The largest grant is ${grantsData.result.grants[0].value.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} awarded to ${grantsData.result.grants[0].recipient} by ${grantsData.result.grants[0].agency}.`
      };
    } else if (lowerMessage.includes('savings')) {
      const totalSavings = grantsData.result.grants.reduce((acc, grant) => acc + grant.savings, 0);
      return {
        message: `The total savings across all grants is ${totalSavings.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.`
      };
    } else if (lowerMessage.includes('fda') || lowerMessage.includes('token')) {
      return {
        message: 'The First Doge Agent ($FDA) token is the official token of the DOGE platform. It enables holders to participate in governance decisions and access premium features within the ecosystem.'
      };
    } else if (lowerMessage.includes('doge') || lowerMessage.includes('api')) {
      return {
        message: 'The DOGE API provides access to comprehensive data about government grants and savings. First Doge Agent ($FDA) helps users interact with this data more effectively.'
      };
    } else {
      return {
        message: 'I can provide information about DOGE grants, savings, and the First Doge Agent ($FDA) token. How can I assist you today?'
      };
    }
  } catch (error) {
    console.error('Error in AI chat service:', error);
    return {
      message: 'I apologize, but I encountered an error while processing your request. Please try again later.'
    };
  }
};

export default {
  fetchDogeGrants,
  fetchCachedDogeGrants,
  chatWithAI
};