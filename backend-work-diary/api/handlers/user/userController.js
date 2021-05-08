import { User } from './user.model.js';

export const createUser= async(req,res)=>{
    const {name,lastName,dni,email,password,cellphone} = req.body;
    try{
        const user = await User.create({
            name,
            lastName,
            dni,
            email,
            password,
            cellphone
        });
        res.json({
            message:'User create'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al crear el usuario'
        })
    }
}

export const updateUser= async(req,res)=>{
    const {name,lastName,dni,email,cellphone} = req.body;
    try{
        const user = await User.update({
            name,
            lastName,
            email,
            cellphone
        },{
            where:{
                dni
            } 
        })
        res.json({
            message:'User update'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al actualizar el usuario'
        })
    }
}

export const deleteUser= async(req,res)=>{
    const {dni} = req.body;
    try{
        const user = await User.destroy({
            where:{
                dni
            }
        })
        res.json({
            message:'User deleted'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al eliminar el usuario'
        })
    }
}

export const getUserByDni= async(req,res)=>{
    const dni = req.params.dni;
    try{
        const user = await User.findAll({
            where:{
                dni
            }
        })
        res.json({
           user
        })
    }catch(error){
        console.log(error);
        res.status(202).json({
            message:'Error al obtener el usuario'
        })
    }
}