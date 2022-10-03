import { useEffect, useState } from "react";

export const useFontLoading = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const webfontConfig = {
      custom: {
        families: ["Circular Std"],
      },
      active: function () {
        setFontsLoaded(true);
      },
    };

    import("webfontloader").then((WebFontLoader) => {
      WebFontLoader.load(webfontConfig);
    });
  }, []);

  return fontsLoaded;
};
