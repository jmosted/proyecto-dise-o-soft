import {getUserByEmail} from "../user/userController.js";
import {pwd} from "../../../config/internal/pwd/pwd.js";
import {generateToken} from "../../../config/internal/jwt/jwt.js";

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const response = await getUserByEmail(email);
        if (!response.error) {
            const isPassword = await pwd.comparePassword(
                password,
                response.data.user.password
            );
            if (isPassword) {
                delete response.data.user.password;
                const token = generateToken(response.data.user);
                res.json({
                    error: false,
                    message: "Procesado correctamente",
                    data: {token},
                    code: 200,
                });
            } else {
                res.json({
                    error: true,
                    message: "Contraseña incorrecta!",
                    data: null,
                    code: 202,
                });
            }
        } else {
            res.json({
                error: true,
                message: "El email no corresponde a ninguna cuenta registrada",
                data: null,
                code: 202,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(202).json({
            error: true,
            message: "Error al momento de autenticar el usuario",
            data: null,
            code: 202,
        });
    }
};
