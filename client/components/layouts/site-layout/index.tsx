import { useEffect, useState } from "react";

enum ViewStateEnum {
  "DEFAULT" = "DEFAULT",
  "ACTIVE" = "ACTIVE",
}

export default function SiteLayout({ children }) {
  const [viewState, setViewState] = useState(ViewStateEnum.DEFAULT);
  const fontsLoaded = true; // useFontLoading();

  useEffect(() => {
    if (fontsLoaded) setViewState(ViewStateEnum.ACTIVE);
  }, [fontsLoaded]);

  const markup = viewState === ViewStateEnum.ACTIVE ? <>{children}</> : null;

  return markup;
}

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
