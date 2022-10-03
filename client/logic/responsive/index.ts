import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const addActiveBreakpoint = ({ ref, activeBreakpoints, setActiveBreakpoints, breakpoint }) => {
  if (!ref?.current) return;

  const newActiveBreakpoints = [...activeBreakpoints];
  const existingBreakpoint = newActiveBreakpoints.find((iterable) => iterable === breakpoint);

  if (!existingBreakpoint) newActiveBreakpoints.push(breakpoint);

  setActiveBreakpoints([...newActiveBreakpoints]);
};

const removeActiveBreakpoint = ({ ref, activeBreakpoints, setActiveBreakpoints, breakpoint }) => {
  if (!ref?.current) return;

  const newActiveBreakpoints = [...activeBreakpoints];
  const existingBreakpointIndex = newActiveBreakpoints.findIndex((iterable) => iterable === breakpoint);

  if (existingBreakpointIndex !== -1) {
    newActiveBreakpoints.splice(existingBreakpointIndex, 1);
  }

  setActiveBreakpoints([...newActiveBreakpoints]);
};

export const useComponentQueries = ({ ref, breakpoints }) => {
  const [observer, setObserver] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [activeBreakpoints, setActiveBreakpoints] = useState([]);

  useEffect(() => {
    // @ts-ignore
    const sizeObserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        for (let entry of entries) {
          const dimensions = entry.target.getBoundingClientRect();

          breakpoints.forEach((breakIterable) => {
            if (dimensions.width <= breakIterable) {
              entry.target.classList.add(`bk-${breakIterable}`);
              addActiveBreakpoint({ ref, activeBreakpoints, setActiveBreakpoints, breakpoint: breakIterable });
            } else {
              entry.target.classList.remove(`bk-${breakIterable}`);
              removeActiveBreakpoint({ ref, activeBreakpoints, setActiveBreakpoints, breakpoint: breakIterable });
            }

            if (!isReady && ref?.current) setIsReady(true);
          });
        }
      });
    });

    setObserver(sizeObserver);
  }, []);

  useEffect(() => {
    if (ref && ref.current && observer) {
      observer.observe(ref.current);
      // setIsReady(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref, observer]);

  return {
    isReady,
    activeBreakpoints,
  };
};

export const useViewport = (): Size => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};
