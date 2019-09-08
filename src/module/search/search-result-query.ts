import {gql} from "apollo-boost";

export const GET_SEARCH_RESULTS = gql`
  query getSearchResults($query : String!, $entities : [String!]) {
    search(query: $query, first: 2, entities: $entities) {
      edges {
        node {
          displayLabel
        }
      }
    }
  }
`;
