import Link from "next/link";



const BookCard = ({ book }) => {

const {price,author,title} = book;





          return (
<div className="card  bg-orange-700 card-sm shadow-sm ">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{author}</p>
    <div className="justify-end card-actions">
      <Link href={`/books/${book.id}`}><button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
          );
};

export default BookCard;