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
require("dotenv/config");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const { app } = (0, app_1.setupExpressApp)(process.env.NODE_ENV);
    yield app_1.apollo.start();
    app_1.apollo.applyMiddleware({
        app,
    });
    app.get("/(:name)?", function (req, res) {
        res.send(`wildcard request ${req.params.name}`);
    });
    app.listen(process.env.PORT, () => {
        console.log(`apollo started on localhost:${process.env.PORT}`);
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=main.js.map