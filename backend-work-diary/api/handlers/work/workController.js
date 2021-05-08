import { User } from './work.model.js';

export const createUser= async(req,res)=>{
    const {nameWork,description,status} = req.body;
    try{
        const work = await Work.create({
            nameWork,
            description,
            status
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
    const {nameWork,description,status} = req.body;
    try{
        const work = await Work.update({
            nameWork,
            description,
            status
        });
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
    const {nameWork,description,status} = req.body;
    try{
        const work = await Work.delete({
            nameWork,
            description,
            status
        });
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

export const getUser= async(req,res)=>{
    const {nameWork,description,status} = req.body;
    try{
        const work = await Work.get({
            nameWork,
            description,
            status
        });
        res.json({
            message:'User get'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al obtener el usuario'
        })
    }
}