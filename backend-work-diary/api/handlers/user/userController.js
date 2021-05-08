import { User } from "./user.model.js";

export const createUser = async (req, res) => {
  const {
    name,
    lastName,
    dni,
    email,
    password,
    cellphone,
    direction,
  } = req.body;
  try {
    const user = await User.create(
      {
        name,
        lastName,
        dni,
        email,
        password,
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
    user.save();
    res.json({
      error: false,
      message: "Usuario creado exitosamente",
      data: null,
      code: 200,
    });
  } catch (error) {
    res.status(202).json({
      error: true,
      message: "Error al crear el usuario",
      data: null,
      code: 202,
    });
  }
};

export const updateUser = async (req, res) => {
  const { name, lastName, dni, email, cellphone, direction } = req.body;
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
    res.json({
      error: false,
      message: "User update",
      data: { user },
      code: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(202).json({
      error: true,
      message: "Error al actualizar el usuario",
      data: null,
      code: 202,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { dni } = req.body; 
  console.log(req.body);
  try {
    await User.destroy({
      where: {
        dni,
      },
    });
    res.json({
      error: false,
      message: "Usuario borrado correctamente",
      data: null,
      code: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error al eliminar el usuario",
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
    res.json({
      error: false,
      message: "procesado correctamente",
      data: { user },
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
