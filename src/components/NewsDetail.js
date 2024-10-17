import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/api/news.json'); // Adjust the path as needed
        const data = await response.json();
        const foundArticle = data.find((news) => news.id === parseInt(id));
        setArticle(foundArticle);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className="p-6">News article not found.</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-yellow-300 mb-4"
        >
          &larr; Back to News
        </button>
        <h2 className="neon-text text-3xl mb-4">{article.title}</h2>
        <p className="text-gray-400 mb-2">Date: {article.date}</p>
        <div className="text-justify text-lg text-white mb-6 leading-relaxed">
          {article.content}
        </div>
        <p className="text-gray-400 mt-6">Author: WARTY</p>
      </div>
    </div>
  );
};

export default NewsDetail;
