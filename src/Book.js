import React, { useState } from "react";
import { useParams } from "react-router-dom";

const books = [
  { bid: 1, bookName: "Car" },
  { bid: 2, bookName: "Products" },
  { bid: 3, bookName: "Dog" },
];

export default function Book() {
  const { id } = useParams();
  const [data, setData] = useState(books.filter((e) => e.bid == id));
  const { bid, bookName } = data[0];
  return (
    <div>
      <div>
        <h2>Book{bid}</h2>
        <p>Name{bookName}</p>
        <p>Author</p>
        <p>Published year</p>
      </div>
    </div>
  );
}
