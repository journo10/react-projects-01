import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Books = ({ books, search}) => {
  //delete
  const deleteBook = async (id) => {
    const { data } = await axios.delete(`http://localhost:5000/delete/${id}`)
   
  };

  //ver
  const lendBook = async (id) => {
    const { data } = await axios.put(`http://localhost:5000/lend/${id}`)
  
  };
  //al
  const backBook = async (id) => {
    const { data } = await axios.put(`http://localhost:5000/back/${id}`)
  };

  return (
    <div className="container mt-5">
      <table className="table table-success table-hover">
        <thead>
          <tr>
            <th scope="col">Adı</th>
            <th scope="col">Açıklaması</th>
            <th scope="col">Resmi</th>
            <th scope="col">Fiyatı</th>
            <th scope="col">Yazarı</th>
            <th scope="col">Adeti</th>
            <th scope="col">Tür</th>
            <th scope="col">Yorum</th>
            <th scope="col" colSpan="4"></th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter((b) =>
              b.bookname
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )
            .map((book) => (
              <tr key={book._id}>
                <td>{book.bookname}</td>
                <td>{book.description}</td>
                <td>
                  <img
                    src={book.photos[0]}
                    className="card-img-top"
                    alt={book.bookname}
                  />
                </td>
                <td>{book.price}₺</td>
                <td>{book.author}</td>
                <td>{book.quantity}</td>
                <td>{book.department}</td>
                <td>{book.comments}</td>
                <td>
                  <button
                    onClick={() => deleteBook(book._id)}
                    className="btn btn-danger"
                  >
                    Sil
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => lendBook(book._id)}
                    className="btn btn-dark"
                  >
                    Ver
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => backBook(book._id)}
                    className="btn btn-warning"
                  >
                    Al
                  </button>
                </td>
                <td>
                  <Link to={`/books/${book._id}`} className="btn btn-success">
                    Detay
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
