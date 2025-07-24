import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Footer from '../components/Footer';

// Dynamically import all images from src/assets/website-photos
const imageModules = import.meta.glob('../assets/website-photos/*.{jpg,JPG,jpeg,png}');

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageModules).map(async (path) => {
          const module = await imageModules[path]();
          return module.default;
        })
      );
      setImages(loadedImages);
      setLoading(false);
    };
    loadImages();
  }, []);

  return (
    <div className="text-primaryGreen">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={84} color="#0f766e" loading={loading} />
        </div>
      ) : (
        <>
          <h2 className="section-header text-center my-12">Gallery</h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center px-4 sm:px-0">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-80 object-cover rounded-lg mb-12 sm:mb-0 m-4 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-3xl max-h-[80vh] w-full"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-full object-contain max-h-[75vh]"
                />
                <button
                  className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-8 h-8 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}
