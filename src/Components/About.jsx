import React, { useState, useEffect } from 'react';

function About() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ['MERN Stack Developer', 'I can Develop cool websites'];

  useEffect(() => {
    const timeout = setTimeout(handleTyping, 200);
    return () => clearTimeout(timeout);
  }, [text]);

  const handleTyping = () => {
    const currentWord = words[currentIndex];
    const currentText = text;

    if (currentText === currentWord) {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setText('');
      }, 200);
    } else {
      setText(currentWord.substring(0, currentText.length + 1));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-6xl font-bold mb-4">I’m Mohamed Grissa</h1>
      <h1 className="text-5xl font-medium mb-8">{text}</h1>
      <p className="text-lg text-gray-800 max-w-xl mx-auto mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas fugiat provident animi odit iusto totam sapiente
        nemo consequatur, eligendi libero numquam reiciendis inventore aliquid nihil iste quidem nam? Suscipit molestiae
        optio repellendus autem, exercitationem et eum. Molestiae similique, deleniti eum aspernatur fugit, voluptatum,
        ipsum autem alias id accusantium corrupti. Atque.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <a href="/portfolio "className="text-black bg-white border-solid border-2 border-black-600 p-3 rounded-lg">My Portfolio</a>
        <a  href="/contact" className="bg-black text-white  border-solid border-2 border-white-600 p-3 rounded-lg">Contact Me</a>
      </div>
    </div>
  );
}

export default About;
