import {User} from "./user.model.js";
import {pwd} from "../../../config/internal/pwd/pwd.js";

export const createUser = async (req, res) => {
    const {name, lastName, dni, email, password, cellphone, direction} = req.body;
    try {
        const passHash = await pwd.encryption(password);
        const user = await User.create(
            {
                name,
                lastName,
                dni,
                email,
                password: passHash,
                cellphone,
                direction,
            },
            {
                fields: [
                    "name",
                    "lastName",
                    "dni",
                    "email",
                    "password",
                    "cellphone",
                    "direction",
                ],
            }
        );
        await user.save();
        res.status(200).json({
            error: false,
            message: "Usuario creado exitosamente",
            data: null,
            code: 200,
        });
    } catch (error) {
        console.log(error);
        res.status(202).json({
            error: true,
            message: "Error al crear el usuario",
            data: null,
            code: 202,
        });
    }
};

export const updateUser = async (req, res) => {
    const {name, lastName, dni, email, cellphone, direction} = req.body;
    console.log(name,lastName,email,dni,cellphone,direction);
    try {
        const user = await User.update(
            {
                name,
                lastName,
                email,
                cellphone,
                direction,
            },
            {
                fields: ["name", "lastName", "email", "cellphone", "direction"],
                where: {
                    dni,
                },
            }
        );
        if (user === 0) {
            res.status(202).json({
                error: true,
                message: "No se pudo actualizar el perfil del usuario",
                data: null,
                code: 202,
            });
        } else {
            const user  = await getUserByEmail(email);
            res.status(200).json({
                error: false,
                message: "User update",
                data: {user},
                code: 200,
            });
        }
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al actualizar el usuario",
            data: null,
            code: 202,
        });
    }
};

export const deleteUser = async (req, res) => {
    const {dni} = req.body;
    try {
        const user = await User.destroy({
            where: {
                dni
            },
        });
        if (user === 0) {
            res.status(202).json({
                error: true,
                message: "El dni no coincide con ninguna cuenta registrada.",
                data: null,
                code: 202,
            });
        } else {
            res.status(200).json({
                error: false,
                message: "Usuario borrado correctamente",
                data: null,
                code: 200,
            });
        }
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al eliminar el usuario",
            data: null,
            code: 202,
        });
    }
};

export const getUserByDni = async (req, res) => {
    const dni = req.params.dni;
    try {
        const user = await User.findAll({
            where: {
                dni,
            },
        });
        res.status(200).json({
            error: false,
            message: "procesado correctamente",
            data: {user},
            code: 200,
        });
    } catch (error) {
        res.status(202).json({
            error: true,
            message: "Error al obtener el usuario",
            data: null,
            code: 202,
        });
    }
};

export const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (user !== null) {
            return {
                error: false,
                message: "procesado correctamente",
                data: {user: user.dataValues},
                code: 200,
            };
        } else {
            return {
                error: true,
                message: "El email no pertenece a ninguna cuenta registrada",
                data: null,
                code: 202,
            };
        }


    } catch (error) {
        return {
            error: true,
            message: "Error al obtener el usuario",
            data: null,
            code: 202,
        };
    }
};
