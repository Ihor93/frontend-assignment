import React, {ChangeEvent} from "react";
import Clear from "../../../../assets/svg/clear"
import Search from "../../../../assets/svg/search"
import LoadingIcon from "../../../../assets/svg/loading-indicator"
import "./styles.css"

interface Props {
    loading : boolean;
    onChange(value : string): void
}

interface State {
    inputHasValue : boolean
}

export class SearchInput extends React.Component<Props, State> {
    private inputRef: React.RefObject<HTMLInputElement>;
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            inputHasValue : false
        }
    }

    onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value);
        this.setState({
            inputHasValue : !!event.target.value
        })
    };

    onClear = () => {
        this.inputRef.current.value = "";
        this.setState({
            inputHasValue : false
        })
    };

    render() {
        const { loading } = this.props;
        const { inputHasValue } = this.state;
        return (
            <div className="search-input-container">
                <Search/>
                <input ref={this.inputRef} type="text" className="search-input" onChange={this.onChangeValue}/>
                { loading && <LoadingIcon/> }
                { !loading && inputHasValue && <Clear onClick={this.onClear}/> }
            </div>
        );
    }
}