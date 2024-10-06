import React, { useState } from 'react';
import { X, Menu, User, Briefcase, Phone } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const sections = {
    about: {
      title: 'About Me',
      content: 'I am a passionate developer with experience in React and mobile web development.',
      icon: User
    },
    projects: {
      title: 'Projects',
      content: 'Here are some of my recent projects: [List your projects here]',
      icon: Briefcase
    },
    contact: {
      title: 'Contact',
      content: 'Email: your.email@example.com | Phone: (123) 456-7890',
      icon: Phone
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button onClick={toggleMenu} className="focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="bg-blue-500 text-white">
          {Object.entries(sections).map(([key, { title, icon: Icon }]) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setMenuOpen(false);
              }}
              className="block w-full text-left p-4 hover:bg-blue-600 focus:outline-none flex items-center"
            >
              <Icon size={18} className="mr-2" />
              {title}
            </button>
          ))}
        </nav>
      )}

      <main className="flex-grow p-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          {React.createElement(sections[activeSection].icon, { size: 24, className: "mr-2" })}
          {sections[activeSection].title}
        </h2>
        <p>{sections[activeSection].content}</p>
      </main>

      <footer className="bg-gray-200 p-4 text-center text-sm">
        © 2024 Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
