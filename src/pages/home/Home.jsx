import Books from "../../components/Books";
import PageTitle from "../../components/PageTitle";

const Home = () => {
  return (
    <div className="py-5">
      <PageTitle title={"Home"} />
      <h2 className="text-2xl font-bold text-center mb-5">Books</h2>
      <Books />
    </div>
  );
};

export default Home;
