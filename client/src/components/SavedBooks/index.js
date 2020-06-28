import React from "react";
import { Row, Col } from "../Grid";

const SavedBooks = props => {
    return props.booksSaved.length === 0 ? (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3>Books Saved</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body">
                    <div>
                        <h3>Books Saved</h3>
                        {props.booksSaved.map(savedBook => {
                            return (
                                <li className="list-group-item">
                                    <Row id={savedBook.title + "Card"} key={savedBook._id}>
                                        <Col size="2">
                                            <img src={savedBook.image} alt={savedBook.title} />
                                        </Col>
                                        <Col size="1" />
                                        <Col size="9">
                                            <Row>
                                                <h1>{savedBook.title}</h1>
                                            </Row>
                                            <Row>
                                                <h2>{savedBook.authors}</h2>
                                            </Row>
                                            <Row>
                                                <h4>{savedBook.description}</h4>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <button className="btn btn-danger" id={savedBook._id} onClick={() => props.handleDeleteButton(savedBook._id)}>Delete Book</button>
                                        <a href={savedBook.link} target="_blank" rel="noopener noreferrer">
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

export default SavedBooks;