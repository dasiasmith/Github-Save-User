/* eslint-disable react/prop-types */
import React from "react";

function SearchBar({ placeholder, data }) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type={"text"} placeholder={placeholder}/>
                <div className="seachIcon"></div>
            </div>

        </div>
    )
}

export default SearchBar