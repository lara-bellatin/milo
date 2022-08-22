import React, { useEffect, useState } from "react";

import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

import { useLoginMutation } from "generated/graphql";

import { useUserAuth } from "logic/apollo/use-user-auth";
import { isValidEmail } from "logic/utilities";

import { Button } from "components/core/Button";
import { Flex } from "components/core/Flex";
import { TextInput } from "components/core/Input";
import { Text } from "components/core/Text";

function validate(v: { email: string, password: string }) {
  let errors = {};

  if (!v.email) {
    errors["email"] = "You must enter your email to continue";
  }

  if (!v.password) {
    errors["password"] = "Please enter a password";
  }

  if (!isValidEmail(v.email)) {
    errors["email"] = "Invalid email address";
  }

  return errors;
}

export default function LoginForm() {
  const { hasRun, user } = useUserAuth({ noRedirectOnFail: true });
  const router = useRouter();

  const [login] = useLoginMutation();

  const [error, setError] = useState(null);

  useEffect(() => {
    if (hasRun && user) {
      router.push("/");
    }
  }, [hasRun]);

  async function onSubmit({ email, password }: { email: string, password: string }) {
    try {
      const res = await login({ variables: { email, password } });

      if (res.data.login) {
          router.push("/home");
      }
    } catch (error) {
      setError(error?.graphQLErrors[0]?.message || "Oops, something went wrong! Please try again, or contact support.");
    }
  }

  return (
    <Flex direction="column" align="center" justify="center" css={{ maxWidth: 312, alignSelf: "center" }}>
      {/* <Logo which="WORDMARK" width={116} height={48} fillColor={colors.canvasPurple} /> */}
      <Text type="displaySmall" align="center" css={{ margin: "24px 0 32px 0" }}>
        Welcome to milo!
      </Text>

      <Formik initialValues={{ email: "", password: "" }} validate={validate} onSubmit={onSubmit}>
        {({ isSubmitting, isValid }) => (
          <Form style={{ width: "100%" }}>
            <Field
              name="email"
              inputmode="email"
              autocomplete="username"
              placeholder="milo@example.com"
              css={{ marginBottom: 8 }}
              as={TextInput}
            />
            <Field
              name="password"
              inputmode="password"
              placeholder="******"
              css={{ marginBottom: 8 }}
              as={TextInput}
            />
            <Button type="submit" width="fill" size="large" kind="secondary" disabled={!isValid || isSubmitting}>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
      {error && (
        <Text align="center" color="critical" css={{ marginTop: 8 }}>
          {error}
        </Text>
      )}
    </Flex>
  );
}