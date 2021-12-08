import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(setAccessToken) {
  try {
    const graphQLCLient = new GraphQLClient(
      "http://backend04.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLCLient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
