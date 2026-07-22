import React, { useEffect, useState } from 'react';

export default function TypingText({ titles, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentTitle.substring(0, text.length + 1));
          if (text.length + 1 === currentTitle.length) {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          setText(currentTitle.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-block min-h-[1.5em] font-semibold gradient-text">
      {text}
      <span className="animate-pulse ml-1 inline-block w-[3px] h-[1em] bg-blue-400 align-middle" />
    </span>
  );
}
