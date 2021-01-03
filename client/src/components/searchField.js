import React from "react";
import "../css/styles.css";

function searchField(props) {
    return (
        <div className="centerform">
            <form>
                <div className="form-group">
                    <input
                        onChange={props.handleInputChange}
                        size="sm"
                        value={props.search || ""}
                        name="search"
                        type="text"
                        placeholder="Search for nutritional info!"
                        id="search"></input>
                </div>
                <div>
                <button onclick={props.handleFormSubmit} className="btn btn-info float">Search</button>
                </div>
            </form>
        </div>
    )
}

export default searchField;