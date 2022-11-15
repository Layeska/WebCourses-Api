const express = require("express");
const db = require("./utils/database");
const initModels = require("../src/models/initModels");

const userRoute = require("./routes/users.routes");
const courseRoute = require("./routes/courses.routes");
const courseUsers = require("./routes/user_course.routes");
const videoRoute = require("./routes/videos.routes");
const categoriesRoute = require("./routes/categories.routes");
const authenticate = require("./routes/auth.routes");

require("dotenv").config();
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT =  process.env.PORT || 8000;

db.authenticate().then(() => console.log("*** Successful authentication ***"))
.catch((error) => console.log(error));

db.sync({alter: false}).then(() => console.log("*** Synchronized database ***"))
.catch(error => console.log(error));

initModels();

app.get("/", (req, res) => {
    res.status(200);
});

app.use("/api/v1", userRoute);
app.use("/api/v1", courseRoute);
app.use("/api/v1", courseUsers);
app.use("/api/v1", videoRoute);
app.use("/api/v1", categoriesRoute);
app.use("/api/v1", authenticate);


app.listen(PORT, () => console.log(`--- Active Server in ${PORT} port! ---`));