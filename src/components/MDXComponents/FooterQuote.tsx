const FooterQuote = ({ text }: { text: string }) => {
  return (
    <blockquote className="text-lg font-semibold italic text-gray-700 mt-8 text-center">
      {text}
    </blockquote>
  );
};

export default FooterQuote;
