import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import { colors } from "theme";
import { media } from "theme";

import { useMedia } from "hooks/useMedia";

import { useViewport } from "logic/responsive";
import { useStore } from "logic/store/global-store";

import { Flex } from "components/core/Flex";
import { ConditionalLayer } from "components/conditional-layer";


export const canvasColoring = {
  color: colors.canvasBlack,
  subscriptions: [],
  changeColor({ color }) {
    this.subscriptions.forEach((iterable) => {
      iterable(color);
    });
  },
};

export const urlMappings = {
  HOME: "/home/",
  LOGIN: "/login/"
};

export function Layout({ children }) {
  const router = useRouter();
  const { state } = useStore();
  const [_activeTab, setActiveTab] = useState(null);
  const [color, setColor] = useState(canvasColoring.color);
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  const isDesktop = useMedia<boolean>([media.md], [true], false);
  const ref = useRef();

  useEffect(() => {
    if (state.loginUser) {
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
    canvasColoring.subscriptions.push(setColor);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      if (!url?.includes("splitId=") && !url?.includes("persistContextBar")) {

        if (state?.user?.id === state?.loginUser?.id) {
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
          background-color: ${color};
          transition: background-color 1s ease;
        }

        .status-ACTIVE {
          display: flex;
        }

        .content {
          display: flex;
          flex: 1;
        }

        .content::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
