import { User } from './work.model.js';

export const createWork= async(req,res)=>{
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

export const updateWork= async(req,res)=>{
    const {nameWork,description,status} = req.body;
    try{
        const work = await Work.update({
            nameWork,
            description,
            status
        },{
            where:{
                nameWork 
            }
        }
        );
        res.json({
            message:'Work update'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al actualizar el trabajo'
        })
    }
}

export const deleteWork= async(req,res)=>{
    const {id} = req.body;
    try{
        const work = await Work.destroy({
            where:{
                id
            }
        });
        res.json({
            message:'Work deleted'
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al eliminar el usuario'
        })
    }
}

export const getWork= async(req,res)=>{
    const id = req.params.nameWork;
    try{
        const work = await Work.findAll({
            where:{
                id 
            }
        });
        res.json({
            work
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:'Error al obtener el trabajo'
        })
    }
}