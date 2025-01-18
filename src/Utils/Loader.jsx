import {Loader } from 'lucide-react';

const  LoaderComponent=()=> {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Loader className="w-12 h-12 text-indigo-600 animate-spin" />
      <p className="mt-4 text-gray-600">Loading product...</p>
    </div>
  );
}

export default LoaderComponent