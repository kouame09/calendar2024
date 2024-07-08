import React, { useState } from 'react';
import Month from './Month';

const months = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const nextMonth = () => setCurrentMonth((prev) => (prev + 1) % 12);
  const prevMonth = () => setCurrentMonth((prev) => (prev - 1 + 12) % 12);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="bg-orange-500 text-white px-2 py-1 rounded text-sm sm:px-4 sm:py-2 sm:text-base">
          <span className="hidden sm:inline">Précédent</span>
          <span className="sm:hidden">&lt;</span>
        </button>
        <h2 className="text-lg sm:text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {months[currentMonth]} 2024
        </h2>
        <button onClick={nextMonth} className="bg-orange-500 text-white px-2 py-1 rounded text-sm sm:px-4 sm:py-2 sm:text-base">
          <span className="hidden sm:inline">Suivant</span>
          <span className="sm:hidden">&gt;</span>
        </button>
      </div>
      <div className="flex-grow">
        <Month month={currentMonth} year={2024} />
      </div>
    </div>
  );
}

export default Calendar;