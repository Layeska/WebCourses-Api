const Videos = require("../models/videos.models");


class videoServices {
    static async create(body) {
        try {
            const result = await Videos.create(body);
            return result;
        } catch(error) { throw error; }
    }

    static async delete(id) {
        try {
            const result = await Videos.destroy({where: {id}});
            return result;
        } catch(error) { throw error;}
    }

}

module.exports = videoServices;