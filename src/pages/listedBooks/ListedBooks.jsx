import { useState } from "react";
import TitlePage from "../../components/PageTitle";
import TabComponent from "../../components/TabComponent";
import useListedBooks from "../../hooks/useListedBooks";

const ListedBooks = () => {
  const { readBooks, wishListBooks } = useListedBooks();
  const [currentTab, setCurrentTab] = useState(1);
  const [sortCriteria, setSortCriteria] = useState("");

  // Sorting function
  const sortBooks = (books) => {
    if (sortCriteria === "pages") {
      return [...books].sort((a, b) => a.pages - b.pages);
    } else if (sortCriteria === "year") {
      return [...books].sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    }
    return books;
  };

  // Sorted books based on the selected criteria
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishListBooks = sortBooks(wishListBooks);

  return (
    <div className="py-5">
      <TitlePage title={"Listed Books"} />
      <h1 className="text-center font-bold text-2xl">Books</h1>

      <div className="my-3 text-center">
        <select
          className="p-2 rounded-md bg-black text-white text-lg"
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option disabled selected>
            Sort Books
          </option>
          <option value="pages">Sort By Pages</option>
          <option value="year">Published Year</option>
          <option value="all">All</option>
        </select>
      </div>

      <div className="max-w-full" aria-multiselectable="false">
        <ul
          className="flex items-center border-b border-slate-200"
          role="tablist"
        >
          <li role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 ${
                currentTab === 1
                  ? "border-emerald-500 text-emerald-500"
                  : "border-transparent text-slate-700"
              }`}
              role="tab"
              aria-selected={currentTab === 1}
              onClick={() => setCurrentTab(1)}
            >
              <span>Read Books</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-emerald-50 ${
                currentTab === 2
                  ? "border-emerald-500 text-emerald-500"
                  : "border-transparent text-slate-700"
              }`}
              role="tab"
              aria-selected={currentTab === 2}
              onClick={() => setCurrentTab(2)}
            >
              <span>Wishlist Books</span>
            </button>
          </li>
        </ul>
        <div>
          {currentTab === 1 && (
            <div className="px-6 py-4" role="tabpanel">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sortedReadBooks.map((book) => (
                  <TabComponent key={book.id} book={book} />
                ))}
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="px-6 py-4" role="tabpanel">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sortedWishListBooks.map((book) => (
                  <TabComponent key={book.id} book={book} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
