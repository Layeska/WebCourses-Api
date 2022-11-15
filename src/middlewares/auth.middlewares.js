const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        token = token.replace("Bearer ", "");
        const isValid = jwt.verify(token, "topSecret", {algorithms: "HS512"});
        if(isValid) {
            next();
        }
        
    } catch(error) {
        next({
            status: 400, 
            errorContent: error,
            message: "Failed to verify status"
        });
    }
};

module.exports = authorization;