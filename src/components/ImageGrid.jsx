import React from "react";
import { motion } from "framer-motion";
import "./imagegrid.css";

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="image-grid">
      {images && images.length > 0 ? (
        images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 },
            }}
            onClick={() => onImageClick(image)}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "8px",
              width: "100%",
              height: "360px",
            }}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description || "Image"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Search for images to display!
        </p>
      )}
    </div>
  );
};

export default ImageGrid;
