import React from "react";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="SearchLabel">
                    <h4>Book Search</h4>
                </label>
                <input className="col-12 form-control" value={props.search} type="text" name="searchBook" placeholder="Enter Book's Name" onChange={props.handleInputChange} />
            </div>
            <button type="submit" className="submitButton btn btn-primary" onClick={props.handleFormSubmit}>Submit</button>
        </form>
    )
}

export default SearchForm;