const AuthService = require("../services/auth.service");
const jwt = require("jsonwebtoken");

const userLogin = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const data = await AuthService.login(email,password);
        
        const userData = {
            email: data.result.email,
            username: data.result.username,
            id: data.result.id
        };

        const token = jwt.sign(userData, "topSecret", {algorithm: "HS512"});
        userData.token = token;

        res.json(userData);
    } catch(error) {
        next({
            status: 401, 
            errorContent: error,
            message: "Ups, authentication not performed"
        });
    }
};

module.exports = userLogin;