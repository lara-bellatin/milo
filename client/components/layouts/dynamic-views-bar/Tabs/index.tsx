import { useRouter } from "next/router";

import { Flex } from "components/core/Flex";

import { DynamicViewTabItem } from "../DynamicViewTabItem";
import { TABS, TabType } from "../consts";

interface Props {
  tabs: TabType[];
}

export function DynamicViewTabs({ tabs }: Props) {
  const { pathname } = useRouter();

  return (
    <Flex align="center" justify="between" css={{ gap: 40 }}>
      {tabs.map((t) => (
        <DynamicViewTabItem key={t} type={t} active={TABS[t].path === pathname} />
      ))}
    </Flex>
  );
}
