import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useListedBooks from "../hooks/useListedBooks";

const TabComponent = ({ book }) => {
  const { handleDeleteBook } = useListedBooks();

  return (
    <div className="p-3 border border-gray-600 rounded">
      <img
        className="w-full h-[200px] object-cover rounded"
        src={
          book?.cover
            ? book.cover
            : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        }
        alt=""
      />
      <h1 className="my-2 text-lg font-semibold">{book?.title}</h1>
      <p className="text-lg font-semibold">{book?.pages} Pages</p>
      <p className="my-2 text-lg font-semibold">
        Published Year : {book?.releaseDate}
      </p>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 bg-red-600 text-white text-lg font-semibold rounded-lg"
          onClick={() => handleDeleteBook(book)}
        >
          Remove
        </button>
        <Link
          to={`/books/${book.id}`}
          className="px-3 py-1 bg-green-600 text-white text-lg font-semibold rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

TabComponent.propTypes = {
  book: PropTypes.object,
};

export default TabComponent;
