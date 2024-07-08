import React, { useState, useRef } from 'react';
import EventPopup from './EventPopup';
import { events } from '../data/events';

function Day({ date, hasEvent }) {
  const [showPopup, setShowPopup] = useState(false);
  const dayRef = useRef(null);

  const togglePopup = () => {
    if (hasEvent) {
      setShowPopup(!showPopup);
    }
  };

  const event = events.find(e => 
    e.date.getDate() === date.getDate() && 
    e.date.getMonth() === date.getMonth()
  );

  return (
    <div ref={dayRef} className="relative">
      <div 
        onClick={togglePopup}
        className={`
          p-2 border rounded-lg cursor-pointer transition-all duration-300
          ${hasEvent ? 'bg-orange-100 hover:bg-orange-200' : 'hover:bg-gray-100'}
        `}
      >
        {date.getDate()}
        {hasEvent && <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 mx-auto"></div>}
      </div>
      {showPopup && (
        <EventPopup 
          event={event} 
          onClose={() => setShowPopup(false)} 
          parentRef={dayRef}
        />
      )}
    </div>
  );
}

export default Day;