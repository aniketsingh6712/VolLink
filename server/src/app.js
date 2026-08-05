require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const {helmet,hpp,apiLimiter}=require("./middleware/security.middleware")

const routes = require("./routes");
const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");
const requestId = require("./middleware/requestId.middleware");
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(requestId);
app.use(hpp());

app.use(apiLimiter);

app.use(morgan("dev"));

app.use("/api/v1", routes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;