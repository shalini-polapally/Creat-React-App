import React, { Component } from 'react';

class AddBook extends Component {
    state = {
        name: null,
        author: null,
        pages: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state);
        //console.log(this.props);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" onChange={this.handleChange} />
                    <label htmlFor="pages">Pages:</label>
                    <input type="text" id="pages" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddBook;