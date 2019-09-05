import React from 'react';

const Books = (props) => {

    //console.log(this.props);
    const { books } = props;
    // const bookList = books.map(book => {
    //     if (book.Pages > 400) {
    //         return (
    //             <div className='books' key={book.id}>
    //                 <div>Name:{book.Name}</div>
    //                 <div>Author:{book.Author}</div>
    //                 <div>Pages:{book.Pages}</div>
    //             </div>
    //         )
    //     }
    //     else
    //         return null;
    // })
    const bookList = books.map(book => {
        return book.pages > 200 ? (<div className='books' key={book.id}>
            <div>Name:{book.name}</div>
            <div>Author:{book.author}</div>
            <div>Pages:{book.pages}</div>
            <button onClick={()=>{props.deleteBook(book.id)}}>Delete Book</button>
        </div>) : null
    })
    return (
        <div className="book-list">
            {bookList}
        </div>
    )
}


export default Books;