import { useEffect, useState } from "react";

import { WatchQueryFetchPolicy, gql, useQuery } from "@apollo/client";
import router from "next/router";

import { useStore } from "logic/store/global-store";


export const USER_QUERY = gql`
  query UserQuery {
    currentUser {
      id
      username
      displayName
      email
      status
    }
  }
`;

interface userAuthConfig {
  successRoute?: string;
  failRoute?: string;
  noRedirectOnFail?: boolean;
  fetchPolicy?: WatchQueryFetchPolicy;
}

export function useUserAuth(config?: userAuthConfig) {
  const { dispatch } = useStore();
  const { error, data: userQuery } = useQuery(USER_QUERY, {
    errorPolicy: "all",
    fetchPolicy: config?.fetchPolicy ? config.fetchPolicy : "cache-and-network",
  });
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (userQuery && userQuery.currentUser && !error) {
      if (!hasRun) setHasRun(true);
      const me = { ...userQuery.currentUser };

      dispatch({
        action: "currentUser.set",
        payload: {
          value: {
            ...me,
          },
        },
      });

      if (config && config.successRoute && router.pathname !== config.successRoute) {
        router.push(config.successRoute);
      }
    }
  }, [userQuery]);

  useEffect(() => {
    if (error && error.graphQLErrors && error.graphQLErrors.length) {
      if (!hasRun) setHasRun(true);

      dispatch({
        action: "authentication.clear",
      });

      const newRoute = config && config.failRoute ? config.failRoute : "/login";
      const shouldRedirect = !config || config.noRedirectOnFail !== true;

      if (shouldRedirect && router.pathname !== newRoute) {
        router.push(newRoute);
      }
    }
  }, [error]);

  return { user: userQuery?.currentUser, hasRun };
}
