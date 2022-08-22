import { useEffect, useState } from "react";

import { ApolloProvider } from "@apollo/client";

import { create as createApolloClient, graphQLUrl } from "logic/apollo/client";

import SiteLayout from "components/layouts/site-layout";

import "../styles/global.css";

const client = createApolloClient({
  uri: graphQLUrl,
});

function MyApp({ Component, pageProps }) {
  const [viewState, setViewState] = useState("DEFAULT");
  const fontsLoaded = true; // useFontLoading();

  useEffect(() => {
    if (fontsLoaded) setViewState("ACTIVE");
  }, [fontsLoaded]);

  const getLayout = Component.getLayout || ((page) => <SiteLayout children={page} />);

  const layoutProps = Component.layoutProps || {};

  if (viewState === "DEFAULT") return null;
  return (
    <ApolloProvider client={client}>
          {getLayout(<Component {...pageProps} />, layoutProps)}
    </ApolloProvider>
  );
}

export default MyApp;
