const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-red-100 text-red-800 border border-red-400 p-4 rounded'>
      {children}
    </div>
  );
};

export default Alert;
