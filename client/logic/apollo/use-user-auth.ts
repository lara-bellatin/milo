import { useEffect, useState } from "react";

import { WatchQueryFetchPolicy, gql, useQuery } from "@apollo/client";
import router from "next/router";

import { useStore } from "../store/global-store";


export const USER_QUERY = gql`
  query UserQuery {
    me {
      id
      username
      displayName
      email
      status
      birthday
    }

    loginUser {
      id
      displayName
      email
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
    if (userQuery && userQuery.me && !error) {
      if (!hasRun) setHasRun(true);
      const me = { ...userQuery.me };
      const loginUser = { ...userQuery.loginUser };

      if (me?.status === "ONBOARDING" && !router.asPath.includes("/oauth2") && !config?.noRedirectOnFail) {
        router.push("/onboarding");
      }

      dispatch({
        action: "currentUser.set",
        payload: {
          value: {
            ...me,
            organizations: userQuery.organizations,
          },
        },
      });

      dispatch({
        action: "loginUser.set",
        payload: {
          value: {
            ...loginUser,
          },
        },
      });

      dispatch({
        action: "organization.set",
        payload: {
          value: userQuery.organizations ? userQuery.organizations[0] : null,
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

  return { user: userQuery?.me, hasRun };
}
