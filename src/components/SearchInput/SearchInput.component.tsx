import React, {ChangeEvent} from "react";
import Clear from "../../assets/svg/clear"
import Search from "../../assets/svg/search"
import "./styles.css"

interface Props {
    loading : boolean;
    onChange(value : string): void
}

export class SearchInput extends React.Component<Props> {
    onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value)
    };

    render() {
        // const { loading } = this.props;
        return (
            <div className="search-input-container">
                <Search/>
                <input type="text" className="search-input" onChange={this.onChangeValue}/>
                <Clear/>
            </div>
        );
    }
}