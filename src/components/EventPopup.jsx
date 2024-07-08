import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function EventPopup({ event, onClose, parentRef }) {
  const [popupStyle, setPopupStyle] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      setPopupStyle({
        position: 'fixed',
        top: `${rect.top + scrollY}px`,
        left: `${rect.left}px`,
        zIndex: 1000,
      });
    }

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [parentRef, onClose]);

  return (
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      style={popupStyle}
      className="bg-white p-4 rounded-lg shadow-lg w-64"
    >
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-sm">{event.description}</p>
    </motion.div>
  );
}

export default EventPopup;