import "./SearchBar.css";

const SearchBar = (props) => {
  const { setValue } = props;

  return (
    <div className="searchbar">
      <div>
        <input
          type="search"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
