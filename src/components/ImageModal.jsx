
import React from 'react';
import { motion } from 'framer-motion';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        style={{
          background: 'white',
          padding: '5px',
          borderRadius: '8px',
          maxWidth: '360px',
          textAlign: 'center',
        }}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>{image.alt_description || 'Untitled'}</h3>
        <p>By: {image.user.name}</p>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
