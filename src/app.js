import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();
// console.log(process.env.PORT); // Truy cập biến môi trường

const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
import("./dbs/init_mongodb.js");
import { countConnect, checkOverload} from "./helpers/check.connect.js";
// countConnect();
// checkOverload();
console.log('Current NODE_ENV:', process.env.NODE_ENV);
// init routes

// init routes
app.use('/', routes);
// handle errors

export default app;
