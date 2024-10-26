import { ClipLoader } from 'react-spinners';

export default function Loader() {
    return (
      <div className="flex justify-center items-center h-full">
      <ClipLoader size={50} color="#4A90E2" />
    </div>
      );
  };
  