const CodeSnippet = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className='bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto'>
      <code>{children}</code>
    </pre>
  );
};

export default CodeSnippet;
