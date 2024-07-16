const Error = ({ value, operation }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-9xl text-red-500">⚠️</div>
        <h1 className="text-xl text-gray-800 tracking-wide">{`Sorry ${value} not Found`}</h1>
        <p className="text-gray-800 tracking-wide">{`Please ${operation}`}</p>
      </div>
    );
  }
  
  export default Error;
  