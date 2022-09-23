import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { isValidEmail } from "logic/utilities";

import { Flex } from "components/core/Flex";
import { Field, Form, Formik } from "formik";
import { Button } from "components/core/Button";
// import { Text } from "components/core/Text";
import { TextInput } from "components/core/Input";

import { useLoginMutation } from "generated/graphql";



function validate(v: { email: string, password: string }) {
  let errors = {};

  if (!v.email) {
    errors["email"] = "You must enter your email to continue";
  }

  if (!isValidEmail(v.email)) {
    errors["email"] = "Invalid email address";
  }

  if (!v.password) {
    errors["password"] = "Password cannot be empty";
  }

  return errors;
}


export default function LoginForm() {
  const router = useRouter();
  const [login, { data, error }] = useLoginMutation();


  useEffect(() => {
    if (data && data.login && data.login.user && data.login.user.id) {
      router.push("/home");
    }
  }, [data]);

  useEffect(() => {
    if (error && error.graphQLErrors) {
      const invalidLoginError = error.graphQLErrors.map((errorIterable) => errorIterable.message === "Invalid login");

      if (invalidLoginError) {
        alert("Whoops, there was an error with that email & password combination. Please try again.");
      }
    }
  }, [error]);


  async function onSubmit({ email, password }: { email: string, password: string }) {
    try {
      const res = await login({
        variables: {
          email,
          password
        }
      })

      if (res.data.login.user.id) {
        router.push("/home");
      }
    } catch (error) {
    }
  }


  return (
    <Flex direction="column" align="center" justify="center" css={{ alignSelf: "center" }}>

    <Formik initialValues={{ email: "", password: "" }} validate={validate} onSubmit={onSubmit}>
      {({ isSubmitting, isValid }) => (
        <Form style={{ width: "100%" }}>
          <Field
            name="email"
            inputMode="email"
            autoComplete="username"
            placeholder="me@milo.com"
            css={{ marginBottom: 8 }}
            as={TextInput}
          />
          <Field
            name="password"
            inputMode="password"
            autoComplete="password"
            placeholder="your secret password"
            css={{ marginBottom: 8 }}
            as={TextInput}
          />
          <Button type="submit" width="fill" size="large" kind="secondary" disabled={!isValid || isSubmitting}>
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  </Flex>
);
}