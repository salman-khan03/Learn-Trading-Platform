// Get the publishable key from environment variables
export const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '';

// Get the API base URL from environment variables, default to localhost if not set
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

// Validate configuration
if (!STRIPE_PUBLISHABLE_KEY) {
  console.error('Missing Stripe publishable key. Please add REACT_APP_STRIPE_PUBLISHABLE_KEY to your .env file.');
}

if (!API_BASE_URL) {
  console.error('Missing API base URL. Please add REACT_APP_API_BASE_URL to your .env file.');
} 