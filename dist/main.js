"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield app_1.apollo.start();
    const { app } = (0, app_1.setupExpressApp)(process.env.NODE_ENV);
    const devCORS = {
        credentials: true,
        origin: (origin, callback) => {
            const otherOriginWhitelist = [
                "https://staging.milo.sh",
                "https://api.milo.sh",
            ];
            if (!origin) {
                callback(null, true);
            }
            else if (origin.startsWith("https://milo-")) {
                callback(null, true);
            }
            else if (origin.includes("http://localhost") || origin.includes("https://studio.apollographql.com")) {
                callback(null, true);
            }
            else if (otherOriginWhitelist.includes(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error(`Origin not allowed by CORS: ${origin}`));
            }
        },
    };
    app_1.apollo.applyMiddleware({
        app,
        cors: devCORS,
    });
    app.listen({ port: process.env.PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=main.js.map