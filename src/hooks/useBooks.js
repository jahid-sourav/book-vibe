import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async () => {
  try {
    const response = await axios.get("/data.json");
    const books = response.data.books;
    return books;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchBookDetail = async (id) => {
  try {
    const response = await axios.get("/data.json");
    const books = response.data.books;
    const book = books.find((item) => item.id === id);
    return book;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
};

export const useBookDetail = (id) => {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBookDetail(id),
    enabled: !!id,
  });
};
