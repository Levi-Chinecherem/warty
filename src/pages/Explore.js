// Explore.js
import React, { useState, useEffect } from 'react';
import { FaDownload, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // Import necessary icons

const Explore = () => {
  const [mediaItems, setMediaItems] = useState([]); // State for media items
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Fetch media items from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('/api/explore.json'); // Adjust the path to your API
        const data = await response.json();

        // Sort data by id in descending order
        const sortedData = data.sort((a, b) => b.id - a.id);
        
        setMediaItems(sortedData); // Set fetched and sorted data to state
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    };

    fetchMedia();
  }, []);

  const handleMediaClick = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : mediaItems.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex < mediaItems.length - 1 ? prevIndex + 1 : 0));
  };

  const currentMedia = selectedIndex !== null ? mediaItems[selectedIndex] : null;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 mt-20">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          style={{ breakInside: 'avoid' }}
          onClick={() => handleMediaClick(index)}
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300"
              controls
            />
          )}
        </div>
      ))}

      {/* Modal for Slider View */}
      {currentMedia && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeModal} // Close modal when clicking outside the content
        >
          <div
            className="relative max-w-3xl w-full sm:w-2/3 md:w-1/2 lg:w-1/2 p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the overlay
          >
            {/* Close Button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-800 text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaTimes />
            </button>
            <div className="relative flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 text-white text-3xl p-4 hover:bg-opacity-75"
              >
                <FaArrowLeft />
              </button>
              {/* Media Display */}
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video
                  src={currentMedia.src}
                  className="w-full h-auto rounded-lg"
                  controls
                  autoPlay
                />
              )}
              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-0 text-white text-3xl p-4 hover:bg-opacity-75"
              >
                <FaArrowRight />
              </button>
            </div>
            {/* Download Button */}
            <div className="flex justify-center mt-4">
              <a
                href={currentMedia.src}
                download
                className="text-gray-800 text-xl flex items-center"
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
