const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className='w-full bg-gray-300 rounded-lg h-4'>
      <div
        className='bg-green-600 h-4 rounded-lg'
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
