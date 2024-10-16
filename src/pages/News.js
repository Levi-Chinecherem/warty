import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to details view

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news.json'); // Adjust the path as needed
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, []);

  const handleNewsClick = (id) => {
    // Navigate to the details view with the article ID
    navigate(`/news/${id}`);
  };

  const truncateSummary = (summary, wordLimit) => {
    const words = summary.split(' ');
    if (words.length <= wordLimit) {
      return summary;
    }
    return words.slice(0, wordLimit).join(' ') + '...'; // Append ellipsis for longer summaries
  };

  // Sort news articles by date (latest first)
  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-6">
      <h2 className="neon-text text-3xl text-center mb-8">Latest News</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2"> {/* Responsive grid layout */}
        {sortedNews.map((article) => (
          <div
            key={article.id}
            className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 cursor-pointer"
            onClick={() => handleNewsClick(article.id)}
          >
            <h3 className="text-2xl text-yellow-300">{article.title}</h3>
            <p className="mt-2 text-white">{truncateSummary(article.summary, 100)}</p>
            <p className="mt-1 text-gray-400 text-sm">Date: {article.date}</p>
            <p className="mt-1 text-gray-400 text-sm">Author: {article.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
