import React from "react";
import {searchEntities} from "../../models"
import "./styles.css"

interface Props {
    activeEntity: string
    selectEntity(entity: string): void
}

export class SearchEntities extends React.Component<Props> {
    private containerRef: React.RefObject<HTMLUListElement>;

    constructor(props) {
        super(props);

        this.containerRef = React.createRef();
    }

    onEntityClick(entity)  {
        return (event) => {
            event.target.scrollIntoView({behavior: "smooth", inline: "center"});
            this.props.selectEntity(entity);
        }
    };

    render() {
        const { activeEntity } = this.props;
        return (
            <div className="search-entities-container">
                <ul className="search-entities" ref={this.containerRef}>
                    {
                        searchEntities.map(entity => {
                            const isActive = activeEntity === entity;
                            return (
                                <li
                                    key={entity}
                                    onClick={this.onEntityClick(entity)}
                                    className={isActive ? "search-entities-item active" : "search-entities-item"}>
                                    {entity}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}