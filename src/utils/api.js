// API Configuration
// Automatically detects if running on Vercel or local development
const getApiBaseUrl = () => {
  // In production (Vercel), use relative URLs that point to serverless functions
  if (process.env.NODE_ENV === 'production') {
    return ''; // Relative URL - Vercel will route to /api automatically
  }
  // In development, use local server
  return process.env.REACT_APP_API_URL || 'http://localhost:5000';
};

const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  health: `${API_BASE_URL}/api/health`,
};

export default API_BASE_URL;

