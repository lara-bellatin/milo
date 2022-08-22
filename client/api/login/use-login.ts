import { useEffect } from "react";
import { useApiMutation } from "../use-api-mutation";
import { LOGIN } from "./mutations";

export const useLogin = ({ email = null, password = null }: { email: string, password: string }) => {
  const { run, data, loading, called } = useApiMutation({
    query: LOGIN,
  });

  useEffect(() => {
    if (email) {

      run({
        variables: {
          email: email,
          password: password,
        },
      });
    }
  }, [email, password]);

  const returnVal = {
    run,
    data: null,
    error: null,
    loading,
    called,
  };

  if (data && data.login) {
    returnVal.data = data.login;
  }

  return returnVal;
};
