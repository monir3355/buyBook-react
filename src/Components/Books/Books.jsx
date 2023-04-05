import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {
  const navigate = useNavigation();
  // console.log(navigate.state);
  if(navigate.state === "loading"){
    return <LoadingSpinner></LoadingSpinner>
  }
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