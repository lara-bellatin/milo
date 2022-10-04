import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import { media } from "theme";
import { colors } from "theme";

import { useViewport } from "logic/responsive/index";
import { useStore } from "logic/store/global-store";

import { useMedia } from "hooks/ui";

import { Flex } from "components/core/Flex";

import { ConditionalLayer } from "../conditional-layer";

export const canvasColoring = {
  color: colors.canvasBlack,
  subscriptions: [],
  changeColor({ color }) {
    this.subscriptions.forEach((iterable) => {
      iterable(color);
    });
  },
};

export enum ContextBarVariant {
  "DEFAULT" = "DEFAULT",
  "LEFT_ALIGNED" = "LEFT_ALIGNED",
}

export const urlMappings = {
  HOME: "/home/",
  BUCKETS: "/buckets/",
  THIS_WEEK: "/this-week/",
  UNRESOLVED: "/unresolved/"
};

export function SiteLayout({ children }) {
  const router = useRouter();
  const { state } = useStore();
  const [_activeTab, setActiveTab] = useState(null);
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  const ref = useRef();
  const isDesktop = useMedia<boolean>([media.md], [true], false);


  useEffect(() => {
    if (state.currentUser) {
      setIsReadyToRender(true);
    }
  }, [state]);

  useEffect(() => {
    const path = router.asPath;

    Object.keys(urlMappings).forEach((iterable) => {
      if (path.includes(urlMappings[iterable])) {
        setActiveTab(iterable);
      }
    });
  }, [router]);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      if (!url?.includes("splitId=") && !url?.includes("persistContextBar")) {

        if (state?.user?.id === state?.currentUser?.id) {
          canvasColoring.changeColor({ color: canvasColoring.color });
        }
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, []);

  const { width } = useViewport();
  const approvedListOfExtendedCanvasUrls: string[] = ["/home"];
  const extendedTopCanvasHeight: boolean =
    approvedListOfExtendedCanvasUrls.filter((iterable) => router?.asPath.includes(iterable)).length > 0;

  return (
    <div className={`module status-${isReadyToRender ? "ACTIVE" : "DEFAULT"}`} ref={ref}>

      <ConditionalLayer condition={extendedTopCanvasHeight}>
        <Flex css={{ width: "100%", height: isDesktop ? "100px" : "25px", flexShrink: 0 }} />
      </ConditionalLayer>

      <ConditionalLayer condition={width >= 1}>
        <div className="content">{children}</div>
      </ConditionalLayer>

      <style jsx>{`
        .module {
          display: none;
          flex-direction: column;
          width: 100%;
          background-color: white;
          transition: background-color 1s ease;
          justify-content: center;
        }

        .status-ACTIVE {
          display: flex;
        }

        .content {
          display: flex;
          flex: 1;
        }

        @media ${media.md} {
          .content {
            padding-bottom: 8px;
          }
        }

        .content::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
