import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { ListedContext } from "../context";

const useListedBooks = () => {
  const { readBooks, setReadBooks, wishListBooks, setWishListBooks } =
    useContext(ListedContext);

  useEffect(() => {
    localStorage.setItem("readBooks", JSON.stringify(readBooks));
    localStorage.setItem("wishListBooks", JSON.stringify(wishListBooks));
  }, [readBooks, wishListBooks]);

  const handleReadBooks = (book) => {
    setReadBooks((prevReadBooks) => {
      const isAlreadyInWishList = wishListBooks.find(
        (item) => item.id === book.id
      );
      const isAlreadyRead = prevReadBooks.some((item) => item.id === book.id);

      if (isAlreadyRead) {
        toast.error(`${book.title} Has Been Already Read!`);
        return prevReadBooks;
      } else if (isAlreadyInWishList) {
        const removeBookFromWishListBooks = wishListBooks.filter(
          (item) => item.id !== book.id
        );
        setWishListBooks(removeBookFromWishListBooks);
        toast.success(
          `${book.title} Has Been Deleted from the Wishlist and Added to the Read Books!`
        );
        return [...prevReadBooks, book];
      } else {
        toast.success(`${book.title} Added In The Read Books`);
        return [...prevReadBooks, book];
      }
    });
  };

  const handleWishListBooks = (book) => {
    setWishListBooks((prevWishListBooks) => {
      const isAlreadyInReadBooks = readBooks.find(
        (item) => item.id === book.id
      );
      const isAlreadyInWishList = prevWishListBooks.some(
        (item) => item.id === book.id
      );

      if (isAlreadyInWishList) {
        toast.error(`${book.title} Has Been Already Added In The WishList!`);
        return prevWishListBooks;
      } else if (isAlreadyInReadBooks) {
        toast.error(`${book.title} Has Been Already Added In The Read Books!`);
        return prevWishListBooks;
      } else {
        toast.success(`${book.title} Added In The Wishlist`);
        return [...prevWishListBooks, book];
      }
    });
  };

  return { handleReadBooks, handleWishListBooks, readBooks, wishListBooks };
};

export default useListedBooks;
