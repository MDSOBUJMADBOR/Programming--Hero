import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';


const BookCard = ({book}) => {
          return (
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm">
  <figure className='p-6 bg-[#f3f3f3] m-6 rounded-xl '>
    <img className='rounded-xl h-[250px] w-[230px]'
      src={book.image}
      alt={book.bookName} />
  </figure>
  <div className="card-body">
     <div className='flex items-center gap-2 '>
{book.tags.map((tag,ind) => (
<div key={ind} className="badge badge-soft badge-success font-bold ">{tag}</div>
))}
     </div>
  
    <h2 className="card-title font-bold text-xl">{book.bookName}</h2>
       <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-between border-t border-dashed pt-4 border-green-500 text-xl">
      <div className="font-semibold">{book.category}</div>
      <div className=" flex gap-2 items-center ">{book.rating} <FaRegStar /> </div>
    </div>
  </div>
                    </Link>
          );
};

export default BookCard;