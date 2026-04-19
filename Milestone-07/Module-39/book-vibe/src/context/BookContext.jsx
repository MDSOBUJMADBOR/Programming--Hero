import React, {  createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
const [readList,setReadList] = useState([]);
const [wishLists,setWisLists] = useState([]);

const handleMarkAsRead = (currentBook) => {
  //step 1: store book object
  //step 2: where to store
  //step 3:array or collection
  //step 4:If the book is already exist then a alert or toast
  //step 5:If not then add the book in the array or collection 
console.log();
const isExistBook = readList.find(book => book.bookId === currentBook.bookId )
if(isExistBook){
 toast.error("The book is already exist");
}else{
  setReadList([...readList,currentBook])
  toast.success(`${currentBook.bookName} is added to list`)
}

}


const handleWishList = (currentBook) => {
  //step 1: store book object
  //step 2: where to store
  //step 3:array or collection
  //step 4:If the book is already exist then a alert or toast
  //step 5:If not then add the book in the array or collection 
const isExistInReadList = readList.find (book => book.bookId === currentBook.bookId)
if(isExistInReadList) {
  toast.error("This book is already in read list")
  return;
}


const isExistBook = wishLists.find(book => book.bookId === currentBook.bookId )
if(isExistBook){
 toast.error("The book is already exist");
}else{
  setWisLists([...wishLists,currentBook])
  toast.success(`${currentBook.bookName} is added to list`)
}

}


const data = {
 readList,
 setReadList,
 handleMarkAsRead,
 wishLists,
 setWisLists,
 handleWishList
          
}
          return <BookContext.Provider value={data}>
                    {children}
          </BookContext.Provider>
};

export default BookProvider;

