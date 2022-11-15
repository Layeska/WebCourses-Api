const { Router } = require("express");
const { addVideo, deleteVideo } = require("../controllers/videos.controllers");

const authorization = require("../middlewares/auth.middlewares");

const route = Router();

//++ Create videos
route.post("/videos", authorization, addVideo);

//++ Delete videos
route.delete("/videos/:id", authorization, deleteVideo);

module.exports = route;