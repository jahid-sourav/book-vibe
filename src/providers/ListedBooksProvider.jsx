import PropTypes from "prop-types";
import { useState } from "react";
import { ListedContext } from "../context";

const ListedBooksProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState(() => {
    const savedReadBooks = localStorage.getItem("readBooks");
    return savedReadBooks ? JSON.parse(savedReadBooks) : [];
  });
  const [wishListBooks, setWishListBooks] = useState(() => {
    const savedWishListBooks = localStorage.getItem("wishListBooks");
    return savedWishListBooks ? JSON.parse(savedWishListBooks) : [];
  });

  return (
    <ListedContext.Provider
      value={{ readBooks, setReadBooks, wishListBooks, setWishListBooks }}
    >
      {children}
    </ListedContext.Provider>
  );
};

ListedBooksProvider.propTypes = {
  children: PropTypes.node,
};

export default ListedBooksProvider;
