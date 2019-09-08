import React from "react";
import {searchEntities} from "../../models"

interface Props {
    activeEntities: string[]
    selectEntity(entity: string): void
}

export function SearchEntities({activeEntities, selectEntity}: Props) {
    return (
        <div className="search-entities">
            <ul>
                {
                    searchEntities.map(entity => {
                        const isActive = activeEntities.includes(entity);
                        return (
                            <li
                                key={entity}
                                onClick={() => selectEntity(entity)}
                                className={isActive ? "search-entity-item active" : "search-entity-item"}>
                                {entity}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}