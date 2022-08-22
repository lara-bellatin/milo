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

    app.listen(process.env.PORT, () => {
        console.log(`apollo started on localhost:${process.env.PORT}`);
    });
}

main().catch((err) => {
    // Log to console and Sentry
    console.error(err);
  });
  