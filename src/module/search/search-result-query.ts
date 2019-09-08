import {gql} from "apollo-boost";

export const GET_SEARCH_RESULTS = gql`
  query getSearchResults($query : String!, $entities : [SearchEntity]) {
    search(query: $query, first: 5, entities: $entities) {
      edges {
        node {
          imageUrl
          href
          displayLabel
        }
      }
    }
  }
`;
