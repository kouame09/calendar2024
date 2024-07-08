import React from 'react';
import Calendar from './components/Calendar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="flex-grow flex items-center justify-center p-4 pb-0 lg:pb-4">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Calendrier 2024</h1>
          
          <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            {/* Bannière */}
            <div className="w-full lg:w-1/3 h-48 lg:h-auto">
              <img 
                src={`${process.env.PUBLIC_URL}/banner.jpg`}
                alt="Bannière" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Calendrier */}
            <div className="w-full lg:w-2/3 p-4 flex flex-col">
              <Calendar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;