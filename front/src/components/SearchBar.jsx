import "./SearchBar.css";
const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <input
          className="bg-innerGray w-9/12 rounded-full p-2 pl-6 text-white inShadoww"
          type="text"
          placeholder="Search contact"
        />
      </div>
    </>
  );
};

export default SearchBar;
