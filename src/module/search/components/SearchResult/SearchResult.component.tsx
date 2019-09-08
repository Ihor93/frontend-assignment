import React from "react";
import {SearchItem} from "./components/SearchItem.component";
import "./styles.css"

export class SearchResultItem {
    imageUrl: string;
    href: string;
    displayLabel: string;
    constructor({imageUrl, href, displayLabel}) {
        this.imageUrl = imageUrl;
        this.href = href;
        this.displayLabel = displayLabel;
    }
}

interface Props {
    searchResult: SearchResultItem[],
    activeEntity: string
}

export function SearchResult({searchResult, activeEntity}: Props) {
    return (
        <div className="search-result">
            {searchResult.map((item, key) => {
                return <SearchItem key={key} {...item} activeEntity={activeEntity}/>
            })}
        </div>
    );
}