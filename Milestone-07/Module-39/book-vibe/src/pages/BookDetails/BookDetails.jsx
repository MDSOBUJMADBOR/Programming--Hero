import React, {   useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';



// const bookPromise = fetch('/booksData.json').then(res => res.json())


const BookDetails = () => {
const {bookId:bookParamsId} = useParams();
console.log('bookParamsId',bookParamsId);

// const books = use(bookPromise)


const books = useLoaderData();

const expectedBook = books.find((book) => book.bookId === Number(bookParamsId));


const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBook

const {handleMarkAsRead,storedBooks,handleWishList} = useContext(BookContext)
console.log(handleMarkAsRead,storedBooks,'bookcomtext');





          return (
                    <div className="bg-base-100 shadow-sm max-w-[1170px] mx-auto grid grid-cols-2 gap-5 my-5">
  <figure className='flex justify-center items-center bg-gray-100'>
    <img
      src={image} className='h-[250px] w-[200px] rounded-md'
      alt="Album" />
  </figure>
  <div className=" space-y-3">
    <h2 className="card-title">{bookName}</h2>
    <h2 className="card-title text-2xl">{author}</h2>
    <p className='pb-1 border-y'>{category}</p>
    <p >Review:{review}</p>
    {tags.map((tag,ind) => (
<div key={ind} className="badge badge-soft badge-success font-bold ">{tag}</div>
))}
    <div className="space-y-3 border-t p-5">
          <div className='flex justify-between items-center gap-2'>
                   <span>Number of pages : </span> <span>{totalPages}</span>
          </div>
          <div className='flex justify-between items-center gap-2'>
                   <span>Publisher : </span> <span>{publisher}</span>
          </div>
          <div className='flex justify-between items-center gap-2'>
                   <span>Publish time : </span> <span>{yearOfPublishing}</span>
          </div>
          <div className='flex  items-center gap-2'>

      <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
      <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>Add to Wishlist</button>
          </div>
          
    </div>
  </div>
</div>
          );
};

export default BookDetails;