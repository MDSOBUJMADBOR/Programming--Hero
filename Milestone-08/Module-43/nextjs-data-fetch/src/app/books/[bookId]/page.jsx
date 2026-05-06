import React from 'react';

const BookDetailsPage =async ({params}) => {
          const {bookId} =await params;

        
const res = await fetch(`http://localhost:5000/books/${bookId}`);
const {title , author,price} = await res.json();


          return (
                    <div>

                <h2>Book Details: {bookId}</h2>
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <p>Price: {price}</p>

                    </div>
          );
};

export default BookDetailsPage;