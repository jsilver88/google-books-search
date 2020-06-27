import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import { Container, Row, Col } from "../components/Grid";
import BookResults from "../components/BookResults";

class Books extends Component {
    state = {
        search: "",
        error: "",
        message: "",
        books: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                let books = res.data.items;
                books = books.map(book => {
                    book = {
                        key: book.id,
                        id: book.id,
                        title: book.volumeInfo.title,
                        author: book.volumeInfo.authors,
                        description: book.volumInfo.description,
                        image: book.volumeInfo.imageLinks.thumbnail,
                        link: book.volumeInfo.infoLink
                    };
                    return book;
                })
                this.setState({ books: books, error: "" });
            }).catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        let booksSaved = this.state.book.filter(bookSaved => bookSaved.id === event.target.id);
        booksSaved = booksSaved[0];
        API.saveBook(booksSaved).then(this.setState({ message: alert("This book has been saved") })).catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid={true}>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <BookResults books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>

        )
    }


}

export default Books;