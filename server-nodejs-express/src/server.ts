import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { app } from "./app";
import { config } from "./config/config";

app.use(cors({
    origin: "*",
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());


const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
    console.log(`🚀 Server running in ${PORT}`);
})