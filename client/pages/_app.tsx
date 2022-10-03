import { useEffect, useState } from "react";

import { ApolloProvider } from "@apollo/client";

import { create as createApolloClient, graphQLUrl } from "logic/apollo/client";

import "../styles/globals.css";

const client = createApolloClient({
  uri: graphQLUrl,
});

function MyApp({ Component, pageProps }) {
  const [viewState, setViewState] = useState("DEFAULT");
  const fontsLoaded = true; // useFontLoading();

  useEffect(() => {
    if (fontsLoaded) setViewState("ACTIVE");
  }, [fontsLoaded]);

  if (viewState === "DEFAULT") return null;
  return (
    <ApolloProvider client={client}>
          <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
