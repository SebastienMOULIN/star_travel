export default function ButtonF() {
  const handleClick = () => {
    alert("Rejoins La Force");
  };

  return (
    <div>
      <button
        className="bg-blue-900 rounded-sm box-border h-32 w-32 p-2 border-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={handleClick}
      >
        Terre
      </button>
    </div>
  );
}
