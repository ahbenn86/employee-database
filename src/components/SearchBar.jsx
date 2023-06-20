import React, { useState, useEffect } from "react";
import Display from "./Display";
import "./SearchBar.css";

//Stores the api data and search field values in state converting any string to lower case.
const SearchBar = () => {
  const [profiles, setProfiles] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
      });
  }, []);

  return (
    <>
      <input
        placeholder="employee search"
        className="search-bar"
        type="search"
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      >
      </input>
      <Display profiles={profiles} search={search}/>
    </>
  );
};

export default SearchBar;
