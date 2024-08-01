'use client';

import Image from 'next/image';
import { useState } from 'react';

const sections = ['Home', 'About', 'Projects', 'Contact'];

const InteractiveImage = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const nextSectionIndex = (currentSection + 1) % sections.length;
    const nextSection = document.getElementById(sections[nextSectionIndex]);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(nextSectionIndex);
    }
  };

  return (
    <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center'>
      <Image
        src='/images/arrow-down.png'
        alt='Scroll down arrow'
        width={35}
        height={35}
        className='animate-bounce cursor-pointer'
        onClick={handleScroll}
      />
    </div>
  );
};

export default InteractiveImage;
