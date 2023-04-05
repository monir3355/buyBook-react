import React from "react";

const Book = ({ book }) => {
  const { image, price, subtitle, title, url } = book;
  return (
    <div className="border rounded-md relative transform duration-200 hover:-translate-y-2">
      <div className="">
        <img className="mx-auto w-full" src={image} alt="" />
      </div>
      <div className="absolute inset-0 flex flex-col items-stretch bg-slate-600 rounded-md opacity-0 hover:opacity-75 text-white transition-opacity duration-200 p-6">
        <p className="font-semibold mb-3">{title}</p>
        <p>{subtitle}</p>
        <p className="mt-auto">{price}</p>
      </div>
    </div>
  );
};

export default Book;
