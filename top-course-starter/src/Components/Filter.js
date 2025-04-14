import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {filterData.map((data) => (
        <button
          key={data.id}
          className={`text-lg px-4 py-2 rounded-md font-medium text-white transition-all duration-200 ${
            category === data.title
              ? "bg-blue-600 border-white"
              : "bg-gray-700 hover:bg-blue-500"
          }`}
          onClick={() => setCategory(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
