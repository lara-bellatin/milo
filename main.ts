import { apollo, setupExpressApp } from "./app";


const main = async () => {
  await apollo.start();
  const { app } = setupExpressApp(process.env.NODE_ENV!);

  const devCORS = {
    credentials: true,
    origin: (origin: string, callback: any) => {
      const otherOriginWhitelist = [
        "https://staging.milo.sh",
        "https://api.milo.sh",
      ];
      if (!origin) {
        callback(null, true);
      } else if (origin.startsWith("https://milo-")) {
        // vercel preview deployments
        callback(null, true);
      } else if (origin.includes("http://localhost") || origin.includes("https://studio.apollographql.com")) {
        // when running the local client
        callback(null, true);
      } else if (otherOriginWhitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin not allowed by CORS: ${origin}`));
      }
    },
  };

  apollo.applyMiddleware({
    app,
    // @ts-ignore
    cors: devCORS,
  });


  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT}`
    );
  });
}

main().catch((err) => {
  // Log to console and Sentry
  console.error(err);
});