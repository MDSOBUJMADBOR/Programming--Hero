import BookCard from "@/components/BookCard";




const BooksPage =async () => {

const res = await fetch("http://localhost:5000/books",{next: {revalidate: 5}});
const books = await res.json();

          return (
                    <div>

             <h2>books: {books.length}</h2>          
       <div className="grid grid-cols-3 gap-4">
          {
books.map(book => <BookCard key={book.id} book={book}></BookCard>)
          }
       </div>
                    </div>
          );
};

export default BooksPage;