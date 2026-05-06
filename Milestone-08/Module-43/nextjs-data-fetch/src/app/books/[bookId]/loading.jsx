
// export const generateStaticParams =async () => {
// const res = await fetch("http://localhost:5000/books");
// const books = await res.json();

// // [{bookId: 1},{bookId:2},...]
// return books.map(book => ({bookId: book.id}));
// }


const BookLoading = () => {
          return (
                    <div className="flex justify-center items-center flex-col">

<h2>Loading book details ...</h2>
<span className="loading loading-spinner text-error"></span>

                    </div>
          );
};

export default BookLoading;