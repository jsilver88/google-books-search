import React from "react";
import { Row, Col } from "../Grid";

const BookResults = props => {
    return props.books.length === 0 ? (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h3>Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body">
                    <div className="article">
                        <h3>Results</h3>
                        {props.book.map(book => {
                            return (
                                <li className="list-group-item">
                                    <Row className="result row" id={book.title + "card"} key={book._id}>
                                        <Col size="2" className="image">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="empty" />
                                        <Col size="9" className="books">
                                            <Row>
                                                <h4>{book.title}</h4>
                                            </Row>
                                            <Row>
                                                <h4>{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p>{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row className="button">
                                        <button className="btn btn-primary" id={book.id} onClick={event => props.handleSavedButton(event)}>Save Book</button>
                                        <a href={book.link} target="_blank">
                                            <button className="btn btn-success">View Book</button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
}

export default BookResults;