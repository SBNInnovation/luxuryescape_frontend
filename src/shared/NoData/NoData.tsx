import React from "react";
import { FiAlertCircle } from "react-icons/fi"; // Importing a React Icon

interface props{
    title: string;
}
const NoDataFound: React.FC<props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-gray-50 rounded-lg shadow-md">
      <FiAlertCircle className="text-gray-400 text-6xl mb-4" />
      <h2 className="text-lg font-semibold text-gray-700">{title || "No Data Found"}</h2>
      <p className="text-gray-500 mt-2">Please check out something else.</p>
    </div>
  );
};

export default NoDataFound;