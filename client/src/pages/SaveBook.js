import React, { Component } from "react";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";

class SaveBooks extends Component {
    state = {
        booksSaved: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ booksSaved: res.data })
            )
            .catch(err => console.log(err));
    }

    handleDeleteButton = id => {
        API.deleteBook(id).then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron />
                <Container>
                    <SavedBooks booksSaved={this.state.booksSaved} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>

        )
    }
};

export default SaveBooks;