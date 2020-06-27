import axios from "axios";

export default {
    // Get books from Google Books api
    getGoogleSearchBooks: function (queryString) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + queryString);
    },
    // Get all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Get books with an id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Save a book
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },
    // Delete a book from id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
};