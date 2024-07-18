import React, { useState } from 'react';

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Step 2: Create Event Handlers

  // handleInputChange
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  // Step 3: Form Creation

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Add Book</button>
      </form>

      // Step 4: Map Through Your Books

      <div>
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
