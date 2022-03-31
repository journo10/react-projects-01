import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [addBookForm, setAddBookForm] = useState({
    bookname: "",
    description: "",
    photos: "",
    price: "",
    author: "",
    quantity: "",
    department: "",
    comments: "",
  });

  const handleChangeBookForm = (e) => {
    setAddBookForm({
      ...addBookForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookForm = (e) => {
    e.preventDefault();
    const newBook = {
      bookname: addBookForm.bookname,
      description: addBookForm.description,
      photos: addBookForm.photos,
      price: addBookForm.price,
      author: addBookForm.author,
      quantity: addBookForm.quantity,
      department: addBookForm.department,
      comments: addBookForm.comments,
    };
    axios
      .post("http://localhost:5000/newbook", newBook)
      .then((res) => {
        navigate("/books");
      })
      .catch((error) => {
        console.log(error);
      });
    setAddBookForm({
      bookname: "",
      description: "",
      photos: "",
      price: "",
      author: "",
      quantity: "",
      department: "",
      comments: "",
    }); //formlardaki inputların içinin temizlenmesi.
  };

  return (
    <div className="container w-50 mt-3">
      <form className="add-form" onSubmit={submitBookForm}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Kitap Adı:
          </label>
          <input
            onChange={handleChangeBookForm}
            value={addBookForm.bookname}
            name="bookname"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Kitap Adı"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Açıklaması:
          </label>
          <input
            onChange={handleChangeBookForm}
            value={addBookForm.description}
            name="description"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Açıklaması"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Resmi:
          </label>
          <input
            onChange={handleChangeBookForm}
            value={addBookForm.photos}
            name="photos"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Resmi"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Fiyatı:
          </label>
          <input
            onChange={handleChangeBookForm}
            value={addBookForm.price}
            name="price"
            type="number"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Fiyatı"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Yazarı:
          </label>
          <input
            onChange={handleChangeBookForm}
            value={addBookForm.author}
            name="author"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Yazarı"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Adeti:
          </label>
          <input
            onChange={handleChangeBookForm}
            value={addBookForm.quantity}
            name="quantity"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Adeti"
          />
        </div>
        <div className="form-floating mb-3">
          <select
            onChange={handleChangeBookForm}
            value={addBookForm.department}
            name="department"
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option defaultValue>Tür</option>
            <option value="1">Kurgu</option>
            <option value="2">Roman</option>
            <option value="3">Psikolojik Roman</option>
            <option value="4">Gerilim</option>
          </select>
          <label htmlFor="floatingSelect">Kitap Türü</label>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Yorum:
          </label>
          <textarea
            onChange={handleChangeBookForm}
            value={addBookForm.comments}
            name="comments"
            className="form-control"
            placeholder="Kitap Türü"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-dark">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
