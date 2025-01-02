import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';
import { fetchImages } from './api';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (query) => {
    try {
      const { data } = await fetchImages(query);
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <SearchBar onSearch={handleSearch} />
      <ImageGrid images={images} onImageClick={(image) => setSelectedImage(image)} />
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default App;
