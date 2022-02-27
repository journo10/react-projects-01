import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/SearchForm";
import BookDetail from "./components/BookDetail";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [books]);
  return (
    <Router>
      <Navbar />
      <Search search={search} handleChange={handleChange} />
      <Routes>
        <Route
          path="/books"
          element={
            books.length > 0 ? (
              <Books books={books} search={search} />
            ) : (
              <div className="App">
                <h5 className="add-book1">
                  Kütüphanede kitap yok eklemek için
                  <Link to="/add-book" className="book-link"> buraya tıklayınız.</Link>
                </h5>
              </div>
            )
          }
        />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books/:book_id" element= {<BookDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;

//Not => useEffect hook

// 1:
// useEffect(() => {
// Bu kısım komponent her render edildiğinde çalışır
// });

// 2:
// useEffect(() => {
// Bu kısım komponent ilk kez render edildiğinde çalışır
// }, []);

// 3:
// useEffect(() => {
// Komponent ilk kez render edildiğinde ve
// prop veya state değiştiğinde çalışır
// }, [prop, state]);
