import { useBooks } from "../hooks/useBooks";
import BookCard from "./BookCard";
import Loading from "./Loading";

const Books = () => {
  const { data: books, isLoading, error } = useBooks();
  if (isLoading) return <Loading />;
  if (error) return <p>Error loading books.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.number} book={book} />
      ))}
    </div>
  );
};

export default Books;
