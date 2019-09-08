import React from "react";
import Clear from "../../assets/svg/clear"
import Search from "../../assets/svg/search"
import "./styles.css"

export class SearchInput extends React.Component {
    render() {
        return (
            <div className="search-input-container">
                <Search/>
                <input type="text" className="search-input"/>
                <Clear/>
            </div>
        );
    }
}