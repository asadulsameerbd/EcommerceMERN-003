import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3 px-5">
      <p className="text-gray-500 text-4xl md:text-3xl">
        {text1} <span className="text-gray-700 md:font-medium ">{text2}</span>
      </p>
      <p className="w-8  h-0.5  bg-gray-700 mt-2"></p>
    </div>
  );
};

export default Title;
