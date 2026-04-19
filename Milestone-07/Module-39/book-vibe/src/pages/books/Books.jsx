import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedReadList/ListedReadList';
import ListedWishList from '../../components/ListedReadList/ListedWishList';

const Books = () => {
const [sortingType,setSortingType] = useState("");

console.log('sorting',sortingType);

const {readList, wishLists} = useContext(BookContext)
console.log(readList,wishLists, 'bookcomtext');
          
          return (
          <div className='max-w-[1170px] mx-auto my-3'>

 <div className='flex justify-center my-3'>
<div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort by : ⬇️ {sortingType}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setSortingType('Pages')}><a>Pages</a></li>
    <li onClick={() => setSortingType('Rating')}><a>Rating</a></li>
  </ul>
</div>
 </div>




<Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList sortingType={sortingType}></ListedReadList>
    </TabPanel>
    <TabPanel>
     
         <ListedWishList sortingType={sortingType}></ListedWishList>
    </TabPanel>
  </Tabs>

                    </div>
          );
};

export default Books;