import { apollo, setupExpressApp } from "./app";


const main = async () => {
    const app = setupExpressApp();

    await apollo.start();

    apollo.applyMiddleware({
        app,
      });

    const port: string = '4000';
    app.listen(port, () => {
        console.log(`apollo started on localhost:${port}`);
    });
}

main().catch((err) => {
    // Log to console and Sentry
    console.error(err);
  });
  