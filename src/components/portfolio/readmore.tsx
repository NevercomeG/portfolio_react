"use client"

import React, { useState } from 'react';

interface ReadMoreReadLessProps {
  initialLimit: number;
  limit: number;
  firstParagraph: string;
  color: string;
  children?: string[];
}

const ReadMoreReadLess = ({
  initialLimit,
  limit,
  firstParagraph,
  children,
  color,
}: ReadMoreReadLessProps) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  let content = null;

  if (children && children.length > 0) {
    const truncatedContent = isReadMoreShown
      ? children
      : children.slice(0, limit);

    const firstParaTruncatedContent = isReadMoreShown
      ? firstParagraph
      : firstParagraph.slice(0, initialLimit);

    content = (
      <>
        <p
          className={`'py-2 leading-normal ${color} dark:text-gray-300 lg:text-xl xl:text-xl`}
          style={{ marginBottom: '1em' }}
        >
          {firstParaTruncatedContent}
        </p>
        {truncatedContent.map((paragraph, index) => (
          <p
            key={index}
            className={`'py-2 leading-normal ${color} dark:text-gray-300 lg:text-xl xl:text-xl`}
            style={{ marginBottom: '1em' }}
          >
            {paragraph}
          </p>
        ))}
      </>
    );
  }

  return (
    <div>
      {content}
      {children && children.length > limit && (
        <button className='text-blue-600 underline' onClick={toggleBtn}>
          {isReadMoreShown ? 'Leer menos' : '...Leer más'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreReadLess;
