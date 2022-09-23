import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

enum methodsOfAuthentication {
  COOKIES = "COOKIES",
  TOKEN = "TOKEN",
}

const createLinkMethods = {
  COOKIES({ uri, sameOrigin }) {
    return createHttpLink({
      uri,
      credentials: sameOrigin ? "same-origin" : "include",
    });
  },

  TOKEN({ uri, localTokenName }) {
    const httpLink = createHttpLink({
      uri,
    });

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem(localTokenName);

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    return authLink.concat(httpLink);
  },
};

const createLink = ({ uri, method, sameOrigin = false, localTokenName = "milo-userToken" }) => {
  return createLinkMethods[method]({
    uri,
    sameOrigin,
    localTokenName,
  });
};

const create = ({ uri, method = methodsOfAuthentication.COOKIES }) => {
  const options = {
    link: createLink({
      uri,
      method,
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
    queryDeduplication: true,
  };

  return new ApolloClient(options);
};

const graphQLUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || ""}/graphql`;

export { create, graphQLUrl };
