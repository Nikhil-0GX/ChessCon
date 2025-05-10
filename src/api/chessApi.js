// src/api/chessApi.js
import axios from 'axios';

const LICHESS_API_BASE_URL = 'https://lichess.org/api';

export const fetchLichessBlogFeed = async (count = 7) => { // Default to 7 articles
  console.log("Attempting to fetch Lichess blog feed...");
  try {
    const response = await axios.get(`${LICHESS_API_BASE_URL}/blog`, {
      params: { nb: count },
      headers: { Accept: 'application/json' }
    });
    console.log("Lichess API Response Status:", response.status);
    console.log("Lichess API Response Data:", response.data);

    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Lichess API returned unexpected data structure:", response.data);
      throw new Error("Received invalid data format from Lichess blog API.");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error fetching Lichess blog feed - Server Response:", error.response.data, error.response.status, error.response.headers);
      throw new Error(`Lichess API Error: ${error.response.status} - ${error.response.data.error || 'Unknown server error'}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error fetching Lichess blog feed - No Response:", error.request);
      throw new Error("No response received from Lichess API. Check network connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error fetching Lichess blog feed - Request Setup Error:", error.message);
      throw new Error(`Failed to fetch chess news: ${error.message}`);
    }
  }
};

// Keep fetchTopLichessPlayers if you plan to use it, or remove if not.
export const fetchTopLichessPlayers = async (gameType = 'blitz', count = 10) => {
    try {
        const response = await axios.get(`${LICHESS_API_BASE_URL}/player/top/${count}/${gameType}`);
        return response.data.users;
    } catch (error) {
        console.error(`Error fetching top ${gameType} players:`, error);
        throw new Error(`Could not fetch top ${gameType} players.`);
    }
};