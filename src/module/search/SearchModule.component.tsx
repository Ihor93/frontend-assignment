import React from "react";
import {Query, QueryResult} from "react-apollo";
import {SearchInput} from "./components/SearchInput/SearchInput.component";
import {SearchEntities} from "./components/SearchEntities/SearchEntities.component";
import {SearchResult} from "./components/SearchResult/SearchResult.component";
import {DelayedCall} from "../../utilities/delayed-call";
import {GET_SEARCH_RESULTS} from "./search-result-query";
import {searchEntities} from "./models";
import "./styles.css"

interface Props {}
interface State {
    query : string,
    activeEntities : string[]
}

export class SearchModule extends React.Component<Props,State> {
    private inputValue : string;
    private delayedCall: DelayedCall;

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            activeEntities : [searchEntities[0]]
        };
        this.delayedCall = new DelayedCall(this.makeDelayedCall, 500);
    }

    componentWillUnmount() {
        this.delayedCall.stop();
    }

    makeDelayedCall = () => {
        this.setState({
            query: this.inputValue
        });
    };

    onInputChange = (value: string) => {
        this.inputValue = value;
        this.delayedCall.run();
    };

    toggleEntity = (entity : string) => {
        console.log(entity)
    };

    private renderQueryResult = ({loading, error, data}: QueryResult) => {
        console.log(data);
        return (
            <div className="search-container">
                <SearchInput onChange={this.onInputChange} loading={loading}/>
                {
                    !(loading && error) &&
                    <>
                        <SearchEntities activeEntities={this.state.activeEntities} selectEntity={this.toggleEntity}/>
                        <SearchResult/>
                    </>
                }
            </div>
        );
    };

    render() {
        return (
            <Query
                skip={!this.state.query}
                children={this.renderQueryResult}
                query={GET_SEARCH_RESULTS}
                variables={{
                    query: this.state.query,
                    entities : this.state.activeEntities
                }}
            />
        );
    }
}