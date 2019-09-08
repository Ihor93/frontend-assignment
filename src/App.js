import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import {SearchContainer} from './components/SearchContainer/SearchContainer.component';

const GET_SEARCH_RESULTS = gql`
  query getSearchResults {
    search(query: "amsterdam", first: 2, entities: [CITY, ARTWORK]) {
      edges {
        node {
          displayLabel
        }
      }
    }
  }
`;

const App = () => (
  <div className="app-container">
    <SearchContainer/>
  </div>
);

export default App;
