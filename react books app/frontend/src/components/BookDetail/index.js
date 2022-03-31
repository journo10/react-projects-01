import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { book_id } = useParams();
  return (
    <div>
      <h1>Backend tarafı yazılmadığı için bu şekilde kaldı... {book_id}</h1>
    </div>
  );
};

export default BookDetail;
