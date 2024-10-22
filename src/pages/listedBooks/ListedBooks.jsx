import useListedBooks from "../../hooks/useListedBooks";

const ListedBooks = () => {
  const { readBooks, wishListBooks } = useListedBooks();

  return (
    <div className="py-5">
      <h1>
        {readBooks.length} Books are Read and {wishListBooks.length} Books are
        in the Wishlist
      </h1>
    </div>
  );
};

export default ListedBooks;
