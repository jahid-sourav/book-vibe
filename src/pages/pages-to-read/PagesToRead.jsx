import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PageTitle from "../../components/PageTitle";
import useListedBooks from "../../hooks/useListedBooks";

const PagesToRead = () => {
  const { wishListBooks } = useListedBooks();
  const data = wishListBooks.map((book) => ({
    name: book.title,
    pages: book.pages,
  }));

  return (
    <div className="py-5">
      <PageTitle title={"Pages To Read"} />
      <h1 className="text-center font-bold text-2xl mb-5">Pages To Read</h1>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pages" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
