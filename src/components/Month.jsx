import React from 'react';
import Day from './Day';
import { events } from '../data/events';

function Month({ month, year }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const hasEvent = events.some(event => 
      event.date.getDate() === i && event.date.getMonth() === month
    );
    days.push({ date, hasEvent });
  }

  const emptyDays = (firstDayOfMonth + 6) % 7; // Adjust for Monday as first day of week

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
        <div key={day} className="text-center font-bold">{day}</div>
      ))}
      {[...Array(emptyDays)].map((_, index) => (
        <div key={`empty-${index}`} className="p-2"></div>
      ))}
      {days.map((day, index) => (
        <Day key={index} date={day.date} hasEvent={day.hasEvent} />
      ))}
    </div>
  );
}

export default Month;