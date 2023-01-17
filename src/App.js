import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import BookLayout from "./BookLayout";
import BookList from "./BookList";
import BookNew from "./BookNew";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<BookNew />} />
      </Route>
    </Routes>
  );
}

export default App;
