import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookDetail = () => {
  const [fold, setFold] = useState(true);
  const book = useLoaderData();
  // console.log(book);
  const {
    authors,
    desc,
    image,
    isbn13,
    language,
    pages,
    price,
    publisher,
    rating,
    subtitle,
    title,
    year,
    url
  } = book;
  return (
    <div className="py-6">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="bg-yellow-400 inline-block p-2 rounded-md">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <p className=" text-gray-900">Authors: {authors.substring(0, 50)}</p>
          <p className=" text-gray-900">Publisher: {publisher}</p>
          <p className=" text-gray-900">Year: {year}</p>
          <p className="mb-5 text-gray-900">Rating: {rating}</p>
          {
            fold ? <p>{desc.substring(0, 100)}.... <span onClick={()=>setFold(!fold)} className="font-semibold text-blue-600 cursor-pointer">Read More</span></p> : <p>{desc} <span onClick={()=>setFold(!fold)} className="font-semibold text-blue-600 cursor-pointer">Read Less</span></p>
          }

          <div className="flex gap-5 mt-8 items-center">
            <a href={url} target="_blank" className="btn bg-yellow-400 hover:bg-yellow-500 p-2 rounded-md">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
