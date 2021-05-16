import jwt from "jsonwebtoken";
import {envConfig} from "../../env.js";

export const generateToken = (data) => {
    return jwt.sign(data, envConfig.tokenSecret, {
        expiresIn: envConfig.tokenLife,
    });
}

export const validationToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, envConfig.tokenSecret, function (err, decoded) {
            if (err) {
                return res.status(401).json(
                    {
                        error: true,
                        message: 'Unauthorized access.',
                        data: null,
                        code: 401,
                    }
                );
            }
            req.TokenDecoded = decoded;
            next();
        });
    } else {
        res.status(403).json({
            error: true,
            message: "Error, no se encontro un token de atenticación",
            data: null,
            code: 403,
        });
    }
}