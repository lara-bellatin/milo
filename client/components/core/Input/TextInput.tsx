import InputMask from "react-input-mask";

import { typographyVariants } from "theme";

import { styled } from "stitches.config";

import { Flex } from "components/core/Flex";
import { Text } from "components/core/Text";
import React from "react";

export type TextInputProps = React.ComponentProps<typeof TextInput>;

const sharedInputStyles = {
  width: "100%",
  padding: "14px $4",
  border: "1px solid $borderDefault",
  borderRadius: "$mediumRoundedSquare",
  ...typographyVariants.body,
  color: "$textDefault",
  outline: "none",
  "&::placeholder": {
    color: "$textDisabled",
  },
  "&:disabled": {
    borderColor: "$borderDisabled",
    background: "$surfaceDisabled",
    color: "$textDisabled",
  },
  variants: {
    error: {
      true: {
        borderColor: "$textCritical",
        background: "$surfaceCriticalSubdued",
      },
    },
  },
};

export const TextInput = styled("input", {
  ...sharedInputStyles,
});

export const MaskedInput = styled(InputMask, {
  ...sharedInputStyles,
});

export const Label: React.FC = ({ children }: { children: React.ReactNode }) => (
  <Text type="body" css={{ fontWeight: "$medium", display: "flex", alignItems: "center" }}>
    {children}
  </Text>
);

export const InputGroup: React.FC = ({ children }: { children: React.ReactNode })=> (
  <Flex direction="column" css={{ marginBottom: "$6", gap: "5px" }}>
    {children}
  </Flex>
);
