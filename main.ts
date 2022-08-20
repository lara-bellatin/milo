import { apollo, setupExpressApp } from "./app";
import "dotenv/config"


const main = async () => {
  const { app } = setupExpressApp(process.env.NODE_ENV!);

    await apollo.start();

    apollo.applyMiddleware({
        app,
      });

      app.get("/(:name)?", function (req, res) {
        res.send(`wildcard request ${req.params.name}`);
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
  