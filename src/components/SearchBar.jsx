import React, { useState, useEffect } from "react";
import "./SearchBar.css";

//Stores the api data and search field values in state converting any input to lower case. 
const SearchBar = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setProfiles(users);
      });
  }, []);

  const filteredProfiles = profiles.filter((user) =>
    user.name.toLowerCase().includes(search)
  );

  return (
    <input
      placeholder="employee search"
      className="search-bar"
      type="search"
      onChange={(event) => setSearch(event.target.value.toLowerCase())}
    >
      {console.log(search)}
    </input>
  );
};

export default SearchBar;
