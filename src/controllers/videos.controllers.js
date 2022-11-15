const Video = require("../services/videos.services");

const addVideo = async(req, res, error) => {
    try {
        const newVideo = req.body;
        const result = await Video.create(newVideo);
        res.json({message: "Successfully created video"});
    } catch(error) {
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
}

const deleteVideo = async(req, res, error) => {
    try {
        const {id} = req.params;
        const result = await Video.delete(id);
        res.json({message: "Successfully deleted video"});
    } catch(error) { 
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
}

module.exports = {
    addVideo,
    deleteVideo
}