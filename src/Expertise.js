import React, { useState } from 'react';
import './Expertise.css';

const ExpertiseSection = () => {
  const [mousePosition, setMousePosition] = useState({});

  const expertiseData = [
    {
      id: 1,
      icon: '/exp1.svg',
      title: 'Frontend Development',
      description: 'Building interactive and responsive user interfaces with modern frameworks like React.js.'
    },
    {
      id: 2,
      icon: '/exp4.svg',
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs using efficient backend technologies.'
    },
    {
      id: 3,
      icon: '/exp2.svg',
      title: 'Technical & Onpage SEO',
      description: 'Optimizing websites for search engines to improve visibility and performance.'
    },
    {
      id: 4,
      icon: '/exp3.svg',
      title: 'CRO & UI/UX',
      description: 'Developing user-friendly interfaces and optimizing experiences to boost conversions.'
    }
  ];

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId) => {
    setMousePosition(prev => ({
      ...prev,
      [cardId]: null
    }));
  };

  return (
    <div id="expertise" className="expertiseSection">
      <h2 className="heading">
        My <span className="purple">Expertise</span>
      </h2>

      <div className="gridWrap">
        {expertiseData.map(item => (
          <button
            key={item.id}
            className={`cardButton card${item.id}`}
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <div className="cardBorderWrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="borderSvg"
                width="100%"
                height="100%"
              >
                <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" />
              </svg>

              {/* Continuous radial glow */}
              <div className="fixedRadial" />

              {/* Mouse hover radial effect */}
              <div
                className="hoverRadial"
                style={{
                  '--mx': mousePosition[item.id] ? `${mousePosition[item.id].x}px` : '50%',
                  '--my': mousePosition[item.id] ? `${mousePosition[item.id].y}px` : '50%'
                }}
              />
            </div>

            <div className="cardInner">
              <div className="contentWrap">
                <img src={item.icon} alt={item.title} className="icon" />
                <div className="textWrap">
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
