import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const color = "green";
  const height = 70;
  const width = 7;

  return (
    <div className="min-h-[20px] flex items-center justify-center">
      <ClipLoader color={color} size={height} width={width} />
    </div>
  );
};

export default Loading;
