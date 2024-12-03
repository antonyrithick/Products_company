const expess = require("express");
const authRoute = require("./src/routes/authRoute");
const userRoute = require("./src/routes/userRoutes");
const companyRoute = require("./src/routes/companyRoutes");
const cors = require("cors");

const errorHandler = require("./src/middlewares/errorhandler");
const { routeError } = require("./src/utils/routeError");

const app = expess();

app.use(expess.json());
app.use(cors());
app.use(expess.urlencoded({ extended: true }));

app.use("/v1/auth/", authRoute);
app.use("/v1/", userRoute);
app.use("/v1/company", companyRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
