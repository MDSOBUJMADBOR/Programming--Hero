import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({sortingType}) => {
  const {readList, wishLists} = useContext(BookContext)
  console.log(readList,wishLists, 'bookcomtext');
const [filteredwishList,setFilteredwishList]  = useState(wishLists);


useEffect(() => {
if(sortingType){
     if(sortingType === 'Pages'){
          const sortedData = [...wishLists].sort((a,b) => a.totalPages - b.totalPages)
          console.log('sortedData',sortedData);
          setFilteredwishList(sortedData)
}
     else if(sortingType === 'Rating'){
 const sortedData = [...wishLists].sort((a,b) => a.Rating - b.Rating)
          console.log('sortedData',sortedData);
          setFilteredwishList(sortedData)
     }  
}

},[sortingType,wishLists])

    
  if(filteredwishList.length === 0){
          return <div className='h-[50vh] bg-gray-100 flex items-center justify-center '>
          <h2 className='text-3xl font-bold'>No Wish list data found</h2>
          </div>
  }

  
            return (
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
  
  {
     filteredwishList.map((book,ind) => <BookCard key={ind} book={book}></BookCard>)       
  } 
  
                      </div>
          );
};

export default ListedWishList;