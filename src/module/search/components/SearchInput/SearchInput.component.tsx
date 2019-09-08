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
    unTouched : boolean
}

export class SearchInput extends React.Component<Props, State> {
    private inputRef: React.RefObject<HTMLInputElement>;
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            inputHasValue : false,
            unTouched : true
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

    onFocus = () => {
        this.setState({
            unTouched : false
        })
    };

    render() {
        const { loading } = this.props;
        const { inputHasValue, unTouched } = this.state;
        const classNames = unTouched ? "search-input-container un-touched" : "search-input-container";
        return (
            <div className={classNames}>
                <Search/>
                <input
                    placeholder="Search by artist, gallery, style, theme, tag, etc."
                    onFocus={this.onFocus}
                    ref={this.inputRef}
                    type="text"
                    className="search-input"
                    onChange={this.onChangeValue}/>
                { loading && <LoadingIcon/> }
                { !loading && inputHasValue && <Clear onClick={this.onClear}/> }
            </div>
        );
    }
}