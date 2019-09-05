import React, { Component } from 'react';
import Books from './Books';
import AddBook from './AddBook';

class App extends Component {
  state = {
    books: [
      {
        name: 'Da Vinci Code',
        author: 'Leonardo Da Vinci',
        pages: 500,
        id: 1
      },
      {
        name: 'Marry Me Stranger',
        author: 'Novneel',
        pages: 200,
        id: 2
      },
      {
        name: 'Secret',
        author: 'Rhonde',
        pages: 300,
        id: 3
      }
    ]
  }
  addBook = (book) => {
    book.id = Math.random();
    let books = [...this.state.books, book];
    this.setState({
      books: books
    })
  }
  deleteBook = (id) => {
    let books = this.state.books.filter(book => {
      return book.id !== id
    });
    this.setState({
      books: books
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Books deleteBook={this.deleteBook} books={this.state.books} />
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
