const CalloutBox = ({
  type = 'info',
  children,
}: {
  type: 'info' | 'warning' | 'success';
  children: React.ReactNode;
}) => {
  const colors = {
    info: 'bg-blue-100 text-blue-800 border-blue-400',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
    success: 'bg-green-100 text-green-800 border-green-400',
  };

  return (
    <div className={`border-l-4 p-4 ${colors[type]} rounded-lg`}>
      {children}
    </div>
  );
};

export default CalloutBox;
