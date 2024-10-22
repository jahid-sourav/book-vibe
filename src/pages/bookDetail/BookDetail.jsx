import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";
import { useBookDetail } from "../../hooks/useBooks";
import useListedBooks from "../../hooks/useListedBooks";

const BookDetail = () => {
  const { id } = useParams();
  const { handleReadBooks, handleWishListBooks } = useListedBooks();

  const { data: book, isLoading, error } = useBookDetail(Number(id));
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }

  const { title, cover, description, pages } = book;

  return (
    <div className="py-5">
      <PageTitle title={`${title}`} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img src={cover} alt={title} />
        </div>
        <div>
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="my-3">{description}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <p>{pages} Pages</p>
            <button
              className="bg-black text-white px-3 py-2 rounded-md"
              onClick={() => handleReadBooks(book)}
            >
              Read
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded-md"
              onClick={() => handleWishListBooks(book)}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
