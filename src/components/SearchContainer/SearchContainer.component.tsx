import React from "react";
import {SearchInput} from "../SearchInput/SearchInput.component";
import {SearchCategories} from "../SearchCategory/SearchCategories.component";
import {SearchResult} from "../SearchResult/SearchResult.component";
import {gql} from "apollo-boost";
import {Query, QueryResult} from "react-apollo";
import "./styles.css"
import {DelayedCall} from "../../utilities/delayed-call";

const GET_SEARCH_RESULTS = gql`
  query getSearchResults($query : String!) {
    search(query: $query, first: 2, entities: [CITY, ARTWORK]) {
      edges {
        node {
          displayLabel
        }
      }
    }
  }
`;

interface Props {}
interface State {
    query : string
}

export class SearchContainer extends React.Component<Props,State> {
    private inputValue : string;
    private delayedCall: DelayedCall;

    constructor(props) {
        super(props);
        this.state = {
            query: ""
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

    private renderQueryResult = ({loading, error, data}: QueryResult) => {
        console.log(data);
        return (
            <div className="search-container">
                <SearchInput onChange={this.onInputChange} loading={loading}/>
                {
                    !(loading && error) &&
                    <>
                        <SearchCategories/>
                        <SearchResult/>
                    </>
                }
            </div>
        );
    };

    render() {
        return (
            <Query
                children={this.renderQueryResult}
                query={GET_SEARCH_RESULTS}
                variables={{
                    query: this.state.query
                }}
            />
        );
    }
}