import React from "react";

const Newslater = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-12">
      <h1 className="text-2xl font-semibold text-center pt-6 pb-4 px-2 md:px-0">
        Subscribe now & get 20% off
      </h1>
      <p className="text-center text-[16px] text-gray-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="flex items-center justify-center py-5 px-5 md:px-0"
      >
        <input
          className="w-full md:w-1/2 outline-none p-3.5 border border-gray-300"
          type="email"
          placeholder="Enter Your Email"
        />

        <button className=" cursor-pointer btn-soft bg-black text-white p-3.5">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newslater;
