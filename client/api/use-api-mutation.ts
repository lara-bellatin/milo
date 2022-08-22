import { useMutation } from "@apollo/client";

export const useApiMutation = ({ query }) => {
  const [run, { data, error, loading, called }] = useMutation(query, {});

  return {
    run,
    data,
    error,
    loading,
    called,
  };
};
