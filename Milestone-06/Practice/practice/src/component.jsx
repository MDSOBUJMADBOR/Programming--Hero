import Book from "./Book";

export default  function Component({books}) {
          console.log(books);
          return(
                    <div>
                    <h1>This is Header Component</h1>
                    <p>book collection: {books.length}</p>
                    <ul>
                              {
                                        books.map(book => <Book key={book.id} book={book}></Book>)
                              }
                    </ul>

                    </div>
          )
}