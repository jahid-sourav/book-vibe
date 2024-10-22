import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { cover, title, releaseDate, pages, number } = book;

  return (
    <div className="p-3 rounded border border-gray-500">
      <img src={cover} alt="Image" className="w-full h-[300px] object-cover" />
      <Link to={`/books/${number}`} className="font-bold text-xl underline">
        {title}
      </Link>
      <p>Release Date : {releaseDate}</p>
      <p>Pages : {pages}</p>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
