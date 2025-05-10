import axios from "axios";
// Chess.com public API docs: https://www.chess.com/news/view/published-data-api

export const fetchChessComNews = async () => {
  const url = "https://api.chess.com/pub/news"; // Example, adapt as needed
  const { data } = await axios.get("https://api.chess.com/pub/news");
  return data.articles.slice(0, 6); // Take first 6 for demo
};

export const fetchLichessBlog = async () => {
  const { data } = await axios.get("https://lichess.org/api/blog", {
    headers: { Accept: "application/json" }
  });
  return data.slice(0, 4); // Top 4
};