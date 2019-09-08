import React from "react";
import {SearchInput} from "../SearchInput/SearchInput.component";
import {SearchCategories} from "../SearchCategory/SearchCategories.component";
import {SearchResult} from "../SearchResult/SearchResult.component";
import "./styles.css"

export function SearchContainer() {
    return (
        <div className="search-container">
            <SearchInput/>
            <SearchCategories/>
            <SearchResult/>
        </div>
    );
}