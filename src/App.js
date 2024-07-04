import { useState } from "react"
import BookCreate from "./component/BookCreate"
import BookList from "./component/BookList"
function App() {
  const [books, setBooks] = useState([])

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((books) => {
      return books.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      } else return book
    })

    setBooks(updatedBooks)
    console.log(updatedBooks)
  }

  const CreateBook = (title) => {
    // console.log("added book", title)
    const updatedBook = [
      ...books,
      { id: Math.floor(Math.random() * 99), title },
    ]
    setBooks(updatedBook)
  }
  return (
    <div className="app">
      <h1>ReadingList</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={CreateBook} />
    </div>
  )
}

export default App
