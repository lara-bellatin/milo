import { WatchQueryFetchPolicy, useLazyQuery } from "@apollo/client";

export const useApiQuery = ({
  query,
  fetchPolicy = "network-only",
}: {
  query: any;
  fetchPolicy?: WatchQueryFetchPolicy;
}) => {
  const [run, { data, error, loading, called }] = useLazyQuery(query, {
    fetchPolicy: fetchPolicy,
  });

  return {
    run,
    data,
    error,
    loading,
    called,
  };
};
