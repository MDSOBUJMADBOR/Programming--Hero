import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedReadList = ({sortingType}) => {
const {readList, wishLists} = useContext(BookContext)
console.log(readList,wishLists, 'bookcomtext');
const [filteredReadList,setFilteredReadList]  = useState(readList);


useEffect(() => {
if(sortingType){
     if(sortingType === 'Pages'){
          const sortedData = [...readList].sort((a,b) => a.totalPages - b.totalPages)
          console.log('sortedData',sortedData);
          setFilteredReadList(sortedData)
}
     else if(sortingType === 'Rating'){
 const sortedData = [...readList].sort((a,b) => a.Rating - b.Rating)
          console.log('sortedData',sortedData);
          setFilteredReadList(sortedData)
     }  
}

},[sortingType,readList])



if(filteredReadList.length === 0){
          return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
          <h2 className='text-3xl font-bold'>No Read list data found</h2>
          </div>
  }

          return (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

{
   filteredReadList.map((book,ind) => <BookCard key={ind} book={book}></BookCard>)       
} 

                    </div>
          );
};

export default ListedReadList;