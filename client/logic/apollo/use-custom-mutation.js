import { useState, useEffect } from "react";

export const useCustomMutation = ({ client, mutationGql, variables, mobileActionToken = null }) => {
  const [data, setData] = useState();
  const [isRunning, setIsRunning] = useState();

  useEffect(() => {
    if (client && mutationGql && variables && !isRunning) {
      setIsRunning(true);

      const runFunc = async () => {
        const mutationOptions = {
          mutation: mutationGql,
          variables,
        };

        if (mobileActionToken) {
          mutationOptions.context = {
            headers: {
              "mobile-action-token": mobileActionToken,
            },
          };
        }

        const result = await client.mutate(mutationOptions);

        setData(result);
      };

      runFunc();
    }
  }, [client, mutationGql]);

  return data;
};
