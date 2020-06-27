import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <h3 className="text-white">Google Book Search</h3>
            </a>
            <div id="nav-bar">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">
                            <button type="button" className="btn btn-info text-white">
                                Search Books
                            </button>
                        </a>
                    </li>
                    <li className="nav-item" id="saved">
                        <a className="nav-link" href="/saved">
                            <button type="button" className="btn btn-danger text-white">
                                Saved Books
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;