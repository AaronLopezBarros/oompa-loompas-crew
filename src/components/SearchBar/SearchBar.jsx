import "./SearchBar.css";

const SearchBar = (props) => {
  const { search } = props;

  return (
    <div className="searchbar">
      <div>
        <input
          type="search"
          onChange={(e) => {
            search(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
