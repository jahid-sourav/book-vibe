import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
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

  const handleDeleteBook = (book) => {
    const isInTheReadBooks = readBooks.find((item) => item.id === book.id);
    const isInTheWishlistsBooks = wishListBooks.find(
      (item) => item.id === book.id
    );

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (isInTheReadBooks) {
          const removeFromTheReadBooks = readBooks.filter(
            (item) => item.id !== book.id
          );
          setReadBooks(removeFromTheReadBooks);
          toast.success(`${book.title} Has Been Removed From The Read Books`);
        } else if (isInTheWishlistsBooks) {
          const removeFromTheWishlistBooks = wishListBooks.filter(
            (item) => item.id !== book.id
          );
          setWishListBooks(removeFromTheWishlistBooks);
          toast.success(
            `${book.title} Has Been Removed From The Wishlist Books`
          );
        }
        Swal.fire({
          title: "Deleted!",
          icon: "success",
        });
      }
    });
  };

  return {
    handleReadBooks,
    handleWishListBooks,
    readBooks,
    wishListBooks,
    handleDeleteBook,
  };
};

export default useListedBooks;
