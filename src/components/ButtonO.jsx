export default function ButtonO() {
  const handleClick = () => {
    alert("Rejoins Le coté obscure");
  };

  return (
    <div>
      <button
        className="flex-col items-center justify-between bg-red-700 rounded-sm box-border h-32 w-32 p-2 border-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={handleClick}
      >
        Obscure
      </button>
    </div>
  );
}
