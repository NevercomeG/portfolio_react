const Quote = ({ text, author }: { text: string; author: string }) => {
  return (
    <blockquote className='border-l-4 border-gray-500 pl-4 italic text-gray-700'>
      "{text}"
      <br />
      <span className='text-right text-gray-500'>— {author}</span>
    </blockquote>
  );
};

export default Quote;
