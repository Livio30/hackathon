import { useState, useEffect } from "react";
import Sentiment from "sentiment";
import "./App.css";
function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => {
    getResult();
  }, [query]);
  var sentiment = new Sentiment();
  var style = {
    height: "2rem",
    width: "60vw",
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    console.dir(search);
    setSearch(" ");
  }
  const getResult = () => {
    var result = sentiment.analyze(query);
    console.dir(result);
  };
  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input
          style={style}
          onChange={updateSearch}
          placeholder="Enter Username or Name"
          value={search}
        />
        <span>
          <button type="submit">Search</button>
        </span>
      </form>
    </div>
  );
}
export default App;