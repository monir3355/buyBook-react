import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
  const {books} = useLoaderData();
  // console.log(books);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
      {
        books.map(book=><Book book={book} key={book.isbn13}></Book>)
      }
    </div>
  );
};

export default Books;