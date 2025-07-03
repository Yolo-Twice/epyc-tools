import { Navigate } from 'react-router';

export default function TaskCard({ name, Icon, to }) {
  const handleClick = () => {
    return <Navigate to={to} />;
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center p-4 bg-blue-800 hover:bg-blue-950 border border-white shadow cursor-pointer transition-all duration-200"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mr-4">
        {Icon && <Icon/>}
      </div>
      <div className="text-lg font-medium text-white">{name}</div>
    </div>
  );
}
