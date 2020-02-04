import React from "react";
import Header from "./Header/Header";
import SearchBar from "../Searchbar/SearchBar";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}
