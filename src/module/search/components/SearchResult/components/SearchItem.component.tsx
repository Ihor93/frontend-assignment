import React from "react";
import { NoImage } from "./NoImage.component";

interface Props {
    imageUrl: string;
    href: string;
    displayLabel: string;
    activeEntity: string;
}

export function SearchItem({imageUrl, href, displayLabel, activeEntity} : Props) {
    return (
        <div className="result-item">
            <div className="result-item-content">
                <a href={"https://www.artsy.net" + href} target="_blank" className="result-item-title">{displayLabel}</a>
                <div className="result-entity-type">{activeEntity}</div>
            </div>
            { imageUrl ? <img src={imageUrl} alt={displayLabel} className="result-item-img"/> : <NoImage/> }
        </div>
    );
}